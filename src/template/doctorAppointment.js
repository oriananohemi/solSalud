import { getEvents } from '../firebase/doctorPost';

const timelineDoctor = (date) => {
    // const user = JSON.parse(localStorage.getItem('session')).user.uid;
    const eventContainer = document.createElement('article');
    // eventContainer.setAttribute('class', 'eventTimeline');

    const view = `
    <div class="doctor-appointment_container">
        <div class="doctor-appointment_info">
            <p>Fecha: ${date.fechaConsulta}</p>
            <p>Hora: ${date.hora}</p>
            <p>Direccion: ${date.lugar}</p>
            <p>Nota: ${date.nota}</p>
        </div>
        <div class="doctor-appointment_status">
            <p>Cita:</p>
            <p>Disponible</p>
            <div><span class="flaticon-delete icon"></span><span class="flaticon-edit icon"></span></div>
        </div>
    </div>
    `;
    
    eventContainer.innerHTML = view; 
    // console.log(eventContainer);     
    return eventContainer;
};

const doctorAppointment = async () => {
    const container = document.createElement('section');
    const exportData = async () => {
        const querySnapshot = await getEvents();
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());        
            container.insertAdjacentElement('beforeend', timelineDoctor({ ...doc.data() }));        
        });
    };

    await exportData(); 
    return container;
};

export default doctorAppointment;