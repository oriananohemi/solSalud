const singUpPatient = () => {
  const view = `
  <h1 class="title">Registrate</h1>
  <div class="signUp__img">
    <img class="image__responsive" src="../assets/registerMuj.png"/>
  </div>
  <form class="centerColumn">
    <input class="input" placeholder="Nombre" required/>
    <input class="input" placeholder="Correo" required/>
    <input class="input" placeholder="Contraseña" required/>
    <button class="button">Registrar</button>
  </form>
  <a class="link" href="">Ya tienes cuenta? Inicia Sesion</a>
  <a class="link" href="">Cancelar</a>
  `;
  const container = document.createElement('section');
  container.setAttribute('class', 'centerColumn');
  container.innerHTML = view;
  return container
}

export default singUpPatient;