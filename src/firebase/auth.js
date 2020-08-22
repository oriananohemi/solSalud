import swal from 'sweetalert';
import { auth } from './init';
/*import { saveUser } from './database';
import { showErrorMessage } from '../utils/error-message-handler';
import { showSuccessMessage } from '../utils/success-message-handler';*/

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

// Inicio de sesion Doctor
export const loginUser = (email, password) => auth
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    if (userCredential.user.emailVerified) {
      localStorage.setItem('session', JSON.stringify(userCredential));
      window.location.href = '#/perfil-doctor';
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
