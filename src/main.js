import './styles/styles.scss';
import router from './router.js/router';
import footer from './template/footer';
import header from './template/header';

const root = document.getElementById('root');

window.addEventListener('load', () => {
  root.innerHTML = '';
  if(window.location.hash !== '#/' && window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('beforeend', header())
  }
    root.insertAdjacentElement('beforeend', router(window.location.hash))
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('beforeend', footer())
  }
  })

window.addEventListener('hashchange', () => {
  root.innerHTML = '';
    root.insertAdjacentElement('beforeend', router(window.location.hash))
})