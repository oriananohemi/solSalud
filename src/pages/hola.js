const hola = () => {
  const view = `<h1>hola</h1>`;
  const container = document.createElement('section');
  container.innerHTML = view;
  return container
}

export default hola;