import userProfile from '../template/userProfile';
import userAppointment from '../template/userAppointment';

const patientProfile = () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.insertAdjacentElement('beforeend', userProfile())
  container.insertAdjacentElement('beforeend', userAppointment())
  return container
}

export default patientProfile;