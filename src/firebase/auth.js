import { auth, provider, database } from './init';
import { saveUser } from './database';
import { showErrorMessage } from '../utils/error-message-handler';
// import { showSuccessMessage } from '../utils/success-message-handler';


// // valida si hay una sesion
// export const validateSession = () => {
//   if (['#/', '#/login', '#/sign-up'].includes(window.location.hash)) {
//     return;
//   }
//   const session = localStorage.getItem('session');
//   if (!session || !JSON.parse(session).user) {
//     window.location.href = '#/login';
//   }
// };

// Registro con correo y contraseña
export const createUserByEmailAndPassPatient = (email, password, username) => {
  const config = {
    url: '#/login',
  };
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // userCredential.user.updateProfile({
      //   displayName: username,
      // });
      userCredential.user.sendEmailVerification(config)
      console.log(userCredential)
        .then(() => {
          const user = {
            id: userCredential.user.uid,
            usuario: username,
            correo: userCredential.user.email,
            perfil: 'paciente',
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

export const createUserByEmailAndPassDoctor = (email, password, username) => {
  const config = {
    url: '#/login',
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

// // Inicio de sesion
// export const loginUser = (email, password) => auth
//   .signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     if (userCredential.user.emailVerified) {
//       localStorage.setItem('session', JSON.stringify(userCredential));
//       window.location.href = '#/timeline';
//     } else {
//       showErrorMessage('auth/email-not-verified');
//     }
//   })
//   .catch((error) => {
//     showErrorMessage(error.code);
//     throw error;
//   });


// // Cerrar sesion
// export const logout = () => {
//   auth.signOut().then(() => {
//     localStorage.clear();
//     window.location.href = '#/login';
//   });
// };