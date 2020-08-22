import { updateUserApopointments } from '../template/userAppointment'

const userProfile = () => {
    const view = `
    <div class="user-container">
        <img src="../assets/user.jpg" alt="user photo">
        <h1>Daniela Torres</h1>
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