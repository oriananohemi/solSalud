import home from '../pages/home';
import hola from '../pages/hola';
import login from '../pages/login';
import singUpPatient from '../pages/signUpPatient';
import singUpDoctor from '../pages/signUpDoctor';
import createSpace from '../pages/createSpace';
import schedule from '../pages/schedule';
import scheduledAppointment from '../pages/scheduledAppointment';

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
    case '#/crear-consulta':
      return createSpace();
    case '#/confirmar-consulta':
      return schedule();
    case '#/consulta-confirmada':
      return scheduledAppointment();
    default:
      return error404();
  }
};

export default router;