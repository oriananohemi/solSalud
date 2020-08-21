import './styles/styles.scss';
import router from './router.js/router';

import './styles/styles.scss';

const root = document.getElementById('root');

window.addEventListener('load', () => {
  root.innerHTML = '';
    root.insertAdjacentElement('beforeend', router(window.location.hash))
})

window.addEventListener('hashchange', () => {
  root.innerHTML = '';
    root.insertAdjacentElement('beforeend', router(window.location.hash))
})