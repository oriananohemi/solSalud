import home from '../pages/home';
import hola from '../pages/hola';
import login from '../pages/login';

const router = (route) => {
  switch (route) {
    case '#/':
      return home();
    case '#/hola':
      return hola();
    case '#/login':
      return login();
    default:
      return error404();
  }
};

export default router;