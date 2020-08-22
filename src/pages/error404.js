const error404 = () => {
  const view = `
    <section class="error404">      
        <h1 class="error404-title">Opss! Error 404</h1>      
        <img src="../assets/favicon.jpg" alt="logo SolSalud">
    </section>
    `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default error404;