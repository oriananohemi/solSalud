import { getEvents, getEventById } from '../firebase/doctorPost';

let queryArray = []
let originalQueryArray = []


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

const exportData = async (container, filteringSpeciality) => {
    if (!originalQueryArray.length) {
        const querySnapshot = await getEvents();
        querySnapshot.forEach(element => {
            originalQueryArray.push(element.data())
        })
        for(let i = 0; i < originalQueryArray.length; i++){
            const data = originalQueryArray[i];
            let user = await getEventById(data.id)
            user = user ? user.data() : { especialidad: null }
            let especialidad = user ? user.especialidad : null
            especialidad = especialidad || 'N/A'
            originalQueryArray[i] = { ...data, especialidad }
        }
    }
    

    if (filteringSpeciality) {
        queryArray = originalQueryArray.filter(({ especialidad }) => especialidad === filteringSpeciality)
    } else {
        queryArray = [...originalQueryArray]
    }

    queryArray.forEach(element => {
        container.insertAdjacentElement('beforeend', timelineUser(element));        
    })

};

const userAppointment = async () => {
    const container = document.createElement('section');
    container.setAttribute('id', 'dates')
    await exportData(container); 
    return container;
};

export const updateUserApopointments = async (filteringSpeciality) => {
    const container = document.querySelector('#dates')
    container.innerHTML = ''
    await exportData(container, filteringSpeciality)
}

export default userAppointment;