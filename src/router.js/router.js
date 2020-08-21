import home from '../pages/home';
import hola from '../pages/hola';
import login from '../pages/login';
import singUpPatient from '../pages/signUpPatient';
import singUpDoctor from '../pages/signUpDoctor';

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
    case '#/registro-doctor':
      return singUpDoctor();
    case '#/doctor-perfil':
      return doctorProfile();
    default:
      return error404();
  }
};

export default router;