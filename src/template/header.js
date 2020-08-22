import { logout } from '../firebase/auth';

const header = () => {
  const view = `
  <div class="header__image">
  <a href="#/"><img class="image__responsive" src="../assets/SolSaludPng.png"></a>
  </div>
  <div id="profile" class="hide">
  <a class="header__link" href="#/perfil">Perfil</a>
  <h4 class="header__link" id="exit">Cerrar Sesion</h4>
  </div>
  <a class="header__link hide" id="login" href="#/login">Iniciar Sesion</a>
  `;
  const container = document.createElement('header');
  container.setAttribute('class', 'horizontalCentering')
  container.innerHTML = view;
  const session = () => {
    const exit = container.querySelector('#exit');
    const profile = container.querySelector('#profile');
    const login = container.querySelector('#login');
    const session = localStorage.getItem('session');
    exit.addEventListener('click', logout);
    if(session) {
      profile.classList.remove('hide')
      login.classList.add('hide')
    } else {
      profile.classList.add('hide')
      login.classList.remove('hide')
    }
  }
  session()
  return container
}

export default header;