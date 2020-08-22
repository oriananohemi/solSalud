import docProfile from '../template/docProfile';

const schedule = () => {
  const view = `
  <div class="centerColumn">
    <button id="take" class="button">Tomar Cita</button>
    <a class="link" href="#/perfil-paciente">Cancelar</a>
  </div>
    `;
  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.innerHTML = view;
  container.insertAdjacentElement('afterbegin', docProfile())

  let takeDate = container.querySelector('#take');
  takeDate.addEventListener('click', () => {
    window.location.hash = '#/consulta-confirmada';
  })

  return container
}

export default schedule;