import doctorProfile from '../template/doctorProfile';

const schedule = () => {
  const view = `
  <div class="centerColumn">
    <button class="button">Tomar Cita</button>
    <a class="link" href="#/perfil-paciente">Cancelar</a>
  </div>
    `;
  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.innerHTML = view;
  container.insertAdjacentElement('afterbegin', doctorProfile())
  return container
}

export default schedule;