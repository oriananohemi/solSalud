import swal from 'sweetalert';
import { auth } from './init';
import { saveUser } from './database';
import { getUserProfile } from '../firebase/database';
import { showErrorMessage } from '../utils/error-message-handler';
import { showSuccessMessage } from '../utils/success-message-handler';

// valida si hay una sesion
export const validateSession = () => {
  if (['#/', '#/login', '#/registro-paciente', '#/registro-doctor'].includes(window.location.hash)) {
    return;
  }
  const session = localStorage.getItem('session');
  if (!session || !JSON.parse(session).user) {
    window.location.href = '#/login';
  }
};

// Registro con correo y contraseña
export const createUserByEmailAndPassPatient = (email, password, username) => {
  const config = {
    url: 'http://localhost:8080/#/login',
  };
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // userCredential.user.updateProfile({
      //   displayName: username,
      // });
      console.log(userCredential)
      userCredential.user.sendEmailVerification(config)
        .then(() => {
          const user = {
            id: userCredential.user.uid,
            usuario: username,
            correo: userCredential.user.email,
            perfil: 'paciente',
          };
          saveUser(user);
        })
        .catch((error) => {
          showErrorMessage(error.code);
          throw error;
        });
    })
    .catch((error) => {
      showErrorMessage(error.code);
      throw error;
    });
};

export const createUserByEmailAndPassDoctor = (email, password, username, profesional ) => {
  const config = {
    url: 'http://localhost:8080/#/login',
  };
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.updateProfile({
        displayName: username,
      });
      userCredential.user.sendEmailVerification(config)
        .then(() => {
          const user = {
            id: userCredential.user.uid,
            usuario: username,
            correo: userCredential.user.email,
            tarjetProfesional: profesionl,
            perfil: 'doctor',
          };
          saveUser(user);
          showSuccessMessage('auth/user-registered');
        })
        .catch((error) => {
          showErrorMessage(error.code);
          throw error;
        });
    })
    .catch((error) => {
      showErrorMessage(error.code);
      throw error;
    });
};

// Inicio de sesion Doctor
export const loginUser = async (email, password) => auth
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    if (userCredential.user.emailVerified) {
      localStorage.setItem('session', JSON.stringify(userCredential));
      let user;
      getUserProfile().then((snapshot) => {
        if (snapshot.empty) {
          return;
        }
        snapshot.forEach((element) => {
          user = element.data();
          if(user.perfil === 'paciente') {
            window.location.href = '#/perfil-paciente'
          } else {
            window.location.href = '#/perfil-doctor'
          }
        }).catch((err) => {
          console.log('Error getting documents', err);
        });
      })
    } else {  
      swal("Upss", "Correo no verificado", "error");      
    }
  })
  .catch((error) => {
    console.error(error.code);
    throw error;
  });

// Cerrar sesion
export const logout = () => {
  auth.signOut().then(() => {
    localStorage.clear();
    window.location.href = '#/login';
  });
}; 
