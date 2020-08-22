import docProfile from '../template/docProfile';
import { editSpace } from '../firebase/doctorPost';

const schedule = () => {
  const view = `
  <div class="centerColumn">
    <button id="take" class="button">Tomar Cita</button>
    <a class="link" href="#/perfil-paciente">Cancelar</a>
  </div>
    `;
  const container = document.createElement('section');
  container.setAttribute('class', 'border__sectionn');
  container.innerHTML = view;
  container.insertAdjacentElement('afterbegin', docProfile())

  let takeDate = container.querySelector('#take');
  takeDate.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('session')).user.uid;
    
    // window.location.hash = '#/consulta-confirmada';
  })

  return container
}

export default schedule;