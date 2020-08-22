import './styles/styles.scss';
import router from './router.js/router';
import footer from './template/footer';
import header from './template/header';
import feedback from './template/feedback';
import { setFeedbackHidingHandler } from './utils/feedback-handler';
import { validateSession } from './firebase/auth';
import './firebase/init';

const root = document.getElementById('root');

window.addEventListener('load', () => {
  root.innerHTML = '';
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('afterbegin', header())
  }
    root.insertAdjacentElement('beforeend', router(window.location.hash))
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('beforeend', footer())
  }
  })

window.addEventListener('hashchange', () => {
  root.innerHTML = '';
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('afterbegin', header())
  }
    root.insertAdjacentElement('beforeend', router(window.location.hash))
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('beforeend', footer())
  }
})

feedback();
setFeedbackHidingHandler();
