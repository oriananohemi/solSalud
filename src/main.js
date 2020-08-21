import './styles/styles.scss';
import router from './router.js/router';

const root = document.getElementById('root');

window.addEventListener('hashchange', () => {
  root.innerHTML = '';
    root.insertAdjacentElement('beforeend', router(window.location.hash))
})