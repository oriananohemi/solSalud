import { doctorPost } from '../firebase/doctorPost'

const doctorProfile = () => {
    const view = `
    <div class="doctor-container">
        <img src="../assets/perfil.jpeg" alt="medical photo">
        <h1>Dr. Nancy Bustamante</h1>
        <h3>#123456789</h3>
        <button type="button">Crear nuevo espacio</button>
    </div>
        `

    const container = document.createElement('section');
    container.innerHTML = view;
    return container;
}

export default doctorProfile;