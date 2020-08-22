import { logout } from '../firebase/auth';

const header = () => {
  const view = `
  <div class="header__image">
  <img class="image__responsive" src="../assets/SolSaludPng.png">
  </div>
  <h4 class="header__link hide" id="exit">Cerrar Sesion</h4>
  <a class="header__link hide" id="login" href="#/login">Iniciar Sesion</a>
  `;
  const container = document.createElement('header');
  container.setAttribute('class', 'horizontalCentering')
  container.innerHTML = view;
  const session = () => {
    const exit = container.querySelector('#exit');
    const login = container.querySelector('#login');
    const session = localStorage.getItem('session');
    container.querySelector('#exit').addEventListener('click', logout);
    if(session) {
      exit.classList.remove('hide')
      login.classList.add('hide')
    } else {
      exit.classList.add('hide')
      login.classList.remove('hide')
    }
  }
  session()
  return container
}

export default header;