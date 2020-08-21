import home from '../pages/home';
import hola from '../pages/hola';
import login from '../pages/login';
// import singUpPatient from '../pages/signUpPatient';

const router = (route) => {
  switch (route) {
    case '#/':
      return home();
    case '#/hola':
      return hola();
    case '#/login':
      return login();
    case '#/registro-paciente':
      return singUpPatient();
    default:
      return error404();
  }
};

export default router;