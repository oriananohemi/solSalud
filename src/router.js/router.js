import home from '../pages/home';
import hola from '../pages/hola';

const router = (route) => {
  switch (route) {
    case '#/':
      return home();
    case '#/hola':
      return hola();
    default:
      return error404();
  }
};

export default router;