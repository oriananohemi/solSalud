const docProfile = () => {
    const view = `
    <div class="doctor-container">
        <img src="../assets/perfil.jpeg" alt="medical photo">
        <h1>Dr. Nancy Bustamante</h1>
        <h3>#123456789</h3>
    </div>
        `

    const container = document.createElement('section');
    container.innerHTML = view;
    return container;
}

export default docProfile;