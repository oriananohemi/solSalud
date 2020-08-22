import userProfile from '../template/userProfile';
import userAppointment from '../template/userAppointment';

const patientProfile = async () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.insertAdjacentElement('beforeend', userProfile())
  container.insertAdjacentElement('beforeend', await userAppointment())
  return container
}

export default patientProfile;