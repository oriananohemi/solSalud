const header = () => {
  const view = `
  <div class="header__image">
  <img class="image__responsive" src="../assets/SolSaludPng.png">
  </div>
  <a class="header__link" href="">Cerrar Sesion</a>
  `;
  const container = document.createElement('header');
  container.setAttribute('class', 'horizontalCentering')
  container.innerHTML = view;
  return container
}

export default header;