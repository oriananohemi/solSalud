import { createUserByEmailAndPassDoctor } from '../firebase/auth';

const singUpDoctor = () => {
  const createUser = () => {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const profesional = document.getElementById('profesionalCard').value;
    const pass = document.getElementById('pass').value;
    createUserByEmailAndPassDoctor(email, pass, username);
  };
  const view = `
  <h1 class="title">Registrate</h1>
  <div class="signUp__img">
    <img class="image__responsive" src="../assets/registerDoc.png"/>
  </div>
  <form class="centerColumn" id="formSignUp">
    <input id="name" class="input" placeholder="Nombre" required/>
    <input id="email" class="input" placeholder="Correo" required/>
    <input id="profesionalCard" class="input" placeholder="Numero de tarjeta profesional" required/>
    <div class="form__group" >
      <input class="input__pass" type="password" id="pass" placeholder="Contraseña" required/>
      <span class="" id="showPass">Mostrar</span>
    </div>
    <button class="button">Registrar</button>
  </form>
  <a class="link" href="#/login">¿Ya tienes cuenta? Inicia Sesion</a>
  <a class="link" href="#/">Cancelar</a>
  `;

  window.history.forward(1);

  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.innerHTML = view;

  const registerForm = container.querySelector('#formSignUp')

  const loginPassword = container.querySelector('#pass');
  const showPass = container.querySelector('#showPass');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser();
  });

  const showPassword = () => {
    if (loginPassword.type === 'password') {
      loginPassword.type = 'text';
      showPass.innerHTML = '';
      showPass.innerHTML= 'Ocultar';
    } else {
      loginPassword.type = 'password';
      showPass.innerHTML = '';
      showPass.innerHTML = 'Mostrar';
    }
  };

  showPass.addEventListener('click', showPassword);

  return container
}

export default singUpDoctor;