const footer = () => {
  const view = `
  <a class="footer__link" href="">¿Preguntas frecuentes?</a>
  <a class="footer__link" href="">Contactenos</a>
  <a class="footer__link" href="">Derechos reservados</a>
  `;
  const container = document.createElement('footer');
  container.setAttribute('class', 'footer')
  container.innerHTML = view;
  return container
}

export default footer;