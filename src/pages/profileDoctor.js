import doctorProfile from '../template/doctorProfile';
import doctorAppointment from '../template/doctorAppointment';
console.log(doctorAppointment());

const profileDoctor = async () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'border__sectionn');
  container.insertAdjacentElement('beforeend', doctorProfile());
  container.insertAdjacentElement('beforeend', await doctorAppointment());
  return container
}

export default profileDoctor;