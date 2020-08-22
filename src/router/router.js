import home from '../pages/home';
import login from '../pages/login';
import singUpPatient from '../pages/signUpPatient';
import singUpDoctor from '../pages/signUpDoctor';
import createSpace from '../pages/createSpace';
import schedule from '../pages/schedule';
import scheduledAppointment from '../pages/scheduledAppointment';
import profileDoctor from '../pages/profileDoctor';
import patientProfile from '../pages/profileUser';

const router = async (route) => {
  switch (route) {
    case '#/':
    case '':
      return home();
    case '#/login':
      return login();
    case '#/registro-paciente':
      return singUpPatient();
    case '#/registro-doctor':
      return singUpDoctor();
    case '#/perfil-doctor':
      return profileDoctor();
    case '#/perfil-paciente':
      return patientProfile();
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