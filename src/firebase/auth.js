import swal from 'sweetalert';
import { auth } from './init';
import { saveUser } from './database';
import { getUserProfile } from '../firebase/database';
import { errorMessageHandler, successMessageHandler  } from '../utils/messageUser';
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
      userCredential.user.sendEmailVerification(config)
        .then(() => {
          const user = {
            id: userCredential.user.uid,
            usuario: username,
            correo: userCredential.user.email,
            perfil: 'paciente',
          };
          saveUser(user);
          swal({ text: successMessageHandler('auth/user-registered'), icon: 'success', button: "Cerrar"})
        })
        .catch((error) => {
          swal({ text: errorMessageHandler(error.code), icon: 'error', button: "Cerrar"})
          throw error;
        });
    })
    .catch((error) => {
      swal({ text: errorMessageHandler(error.code), icon: 'error', button: "Cerrar"})
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
            tarjetProfesional: profesional,
            perfil: 'doctor',
          };
          saveUser(user);
          swal({ text: successMessageHandler('auth/user-registered'), icon: 'success', button: "Cerrar"})
        })
        .catch((error) => {
          swal({ text: errorMessageHandler(error.code), icon: 'error', button: "Cerrar"})
          throw error;
        });
    })
    .catch((error) => {
      swal({ text: errorMessageHandler(error.code), icon: 'error', button: "Cerrar"})
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
        }).catch((error) => {
          swal({ text: errorMessageHandler(error.code), icon: 'error', button: "Cerrar"})
        });
      })
    } else {  
        swal({ text: errorMessageHandler(error.code), icon: 'error', button: "Cerrar"})

    }
  })
  .catch((error) => {
      swal({ text: errorMessageHandler(error.code), icon: 'error', button: "Cerrar"})
    throw error;
  });

// Cerrar sesion
export const logout = () => {
  auth.signOut().then(() => {
    localStorage.clear();
    window.location.href = '#/login';
  });
}; 
