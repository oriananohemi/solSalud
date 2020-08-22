import doctorProfile from '../template/doctorProfile';

const createSpace = () => {
  const view = `
  <form class="centerColumn">
    <input type="date" class="input" placeholder="Fecha" required/>
    <input type="text" class="input" placeholder="Hora" required/>
    <input type="text" class="input" placeholder="Direccion" required/>
    <input type="text" class="input" placeholder="Nota" required/>
    <button class="button">Crear</button>
  </form>
  <a class="link" href="">Cancelar</a>
  `;
  const container = document.createElement('section');
  container.setAttribute('class', 'border__section');
  container.innerHTML = view;
  container.insertAdjacentElement('afterbegin', doctorProfile())
  return container
}

export default createSpace;