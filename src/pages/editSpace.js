import { getEvent, editSpace } from '../firebase/doctorPost';

const editSpaceTemplate = async (spaceId) => {
  const container = document.createElement('section');  
  const doc = await getEvent(spaceId);
  const space = doc.data();
  console.log(space);
  const view = `
  <form id="event_form" class="centerColumn">
    <input id="date" type="date" class="input" placeholder="Fecha" value="${space.fechaConsulta}" required/>
    <input id="time" type="time" class="input" placeholder="Hora" value="${space.hora}" required/>
    <input id="place" type="text" class="input" placeholder="Direccion" value="${space.lugar}" required/>
    <input id="note" type="text" class="input" placeholder="Nota" value="${space.nota}" required/>
    <button type="submit" id="actualizar" class="button">Actualizar</button>
  </form>
  <a class="link" href="">Cancelar</a>
  `;

  container.innerHTML = view;
  const eventForm = container.querySelector('#event_form');

  const updateSpaces = async () => {
    const hour = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const place = document.getElementById('place').value;
    const note = document.getElementById('note').value; 

    const spaceToEdit = {
      hora: hour,
      fechaConsulta: date,      
      lugar: place,
      nota: note,
    };

    editSpace(spaceId, spaceToEdit);
    window.location.href = '#/perfil-doctor'
  };

  eventForm.addEventListener('submit', (e) => { e.preventDefault(); updateSpaces(); });
  return container;
}; 

export default editSpaceTemplate;