// import { doctorPost } from '../firebase/doctorPost'

const doctorProfile = () => {
    const view = `
    <div class="doctor-container">
        <img src="../assets/perfil.jpeg" alt="medical photo">
        <h1>Dr. Nancy Bustamante</h1>
        <h3>#123456789</h3>
        <a href="#/crear-consulta" class="button" type="button">Crear nuevo espacio</a>
    </div>
        `

    const container = document.createElement('section');
    container.innerHTML = view;
    return container;
}

export default doctorProfile;