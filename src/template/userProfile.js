import { updateUserApopointments } from '../template/userAppointment'

const getNameUser = () => {
    const session = JSON.parse(localStorage.getItem('session'));
    const sessionName = session.user.displayName;
    return sessionName;
};

const userProfile = () => {
    const view = `
    <div class="user-container">
        <img src="../assets/user.jpg" alt="user photo">
        <h1>${getNameUser()}</h1>
        <h3>#123456789</h3>
        <select name="Especialidad" id="specialities">
            <option value="">Especialidad</option>
            <option value="Psicología">Psicología</option>
            <option value="Medicina general">Medicina general</option>
        </select>
    </div>
    `

    const container = document.createElement('section');
    container.innerHTML = view;

    container.querySelector('#specialities').addEventListener('change', (event) => {
        updateUserApopointments(event.target.value)
    })

    return container;
}

export default userProfile;