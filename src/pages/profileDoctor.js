import doctorProfile from '../template/doctorProfile';
import doctorAppointment from '../template/doctorAppointment';

const profileDoctor = () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.insertAdjacentElement('beforeend', doctorProfile())
  container.insertAdjacentElement('beforeend', doctorAppointment())
  return container
}

export default profileDoctor;