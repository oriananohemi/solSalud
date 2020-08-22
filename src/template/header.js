import { logout } from '../firebase/auth';

const header = () => {
  const view = `
  <div class="header__image">
  <a href="#/"><img class="image__responsive" src="../assets/SolSaludPng.png"></a>
  </div>
  <div id="profile" class="hide">
  <a class="header__link hide" href="#/perfil-doctor" id="doc">Perfil</a>
  <a class="header__link hide" href="#/perfil-paciente" id="pat">Perfil</a>
  <h4 class="header__link" id="exit">Cerrar Sesion</h4>
  </div>
  <a class="header__link hide" id="login" href="#/login">Iniciar Sesion</a>
  `;
  const container = document.createElement('header');
  container.setAttribute('class', 'horizontalCentering')
  container.innerHTML = view;

  const profile = container.querySelector('#profile');
  const login = container.querySelector('#login');
  const session = localStorage.getItem('session');
  const exit = container.querySelector('#exit');
  exit.addEventListener('click', logout);
  
  const showProfile = () => {
    profile.classList.remove('hide')
    login.classList.add('hide')
    const statusProfile = JSON.parse(localStorage.getItem('profile'));
    if( statusProfile === 'paciente') {
      container.querySelector('#pat').classList.remove('hide')
      container.querySelector('#doc').classList.add('hide')
    } else {
      container.querySelector('#doc').classList.remove('hide')
      container.querySelector('#pat').classList.add('hide')
    }
  }

  const checkSession = () => {
    if(session) {
      showProfile();
    } else {
      profile.classList.add('hide')
      login.classList.remove('hide')
    }
  }
  checkSession()
  return container
}

export default header;