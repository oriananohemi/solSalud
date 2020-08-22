import { getEvents, getEventById } from '../firebase/doctorPost';


const timelineUser = (data) => {
    const eventContainer = document.createElement('article');
    const view = `
    <div class="user-appointment_container">
        <div class="doctor-appointment_info">
            <p>Fecha: ${data.fechaConsulta}</p>
            <p>Hora: ${data.hora}</p>
            <p>Direccion: ${data.lugar}</p>
            <p>Nota: ${data.nota}</p>
        </div>
        <div class="doctor-appointment_status">
            <p>Cita:</p>
            <p class="violet">${data.especialidad}</p>
        </div>
    </div>
    `

    eventContainer.innerHTML = view;
    return eventContainer;
}

const userAppointment = async () => {
    const container = document.createElement('section');
    const exportData = async () => {
        const querySnapshot = await getEvents();
        const queryArray = []
        querySnapshot.forEach(element => {
            queryArray.push(element.data())
        })
        for(let i = 0; i < queryArray.length; i++){
            const data = queryArray[i];
            let user = await getEventById(data.id)
            user = user ? user.data() : { especialidad: null }
            let especialidad = user ? user.especialidad : null
            especialidad = especialidad || 'N/A'
            container.insertAdjacentElement('beforeend', timelineUser({ ...data, especialidad }));        
        }
    };

    await exportData(); 
    return container;
};

export default userAppointment;