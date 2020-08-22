import doctorProfile from '../template/doctorProfile';

const scheduledAppointment = () => {
  const view = `
  <div class="centerColumn">
    <h2 class="message">Has tomado esta cita</h2>
    <h3 class="subtitle">A tu correo llegara la informacion</h3>
    <a class="link" href="">Volver</a>
  </div>
    `;
  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.innerHTML = view;
  container.insertAdjacentElement('afterbegin', doctorProfile())
  return container
}

export default scheduledAppointment;