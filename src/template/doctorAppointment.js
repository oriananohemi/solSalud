import swal from 'sweetalert';
import { getEvents } from '../firebase/doctorPost';
import { deleteSpace } from '../firebase/doctorPost';

const timelineDoctor = (date) => {
    const user = JSON.parse(localStorage.getItem('session')).user.uid;
    const eventContainer = document.createElement('article');

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
            <div>                
                <span class="flaticon-delete icon delete"></span>                
                <span class="flaticon-edit icon edit"></span>              
            </div>
        </div>
    </div>
    `;
    
    eventContainer.innerHTML = view;    
    
    eventContainer
    .querySelector('.delete')
    .addEventListener('click', async () => {
        const hour = new Date(date.fechaConsulta);
        const currentTime = new Date();
        const subtract = hour.getTime() - currentTime.getTime();
        const oper = subtract/ (1000*60*60*24);
    if (user === date.id && oper >= '1') {
    swal({
        title: '¿Estas seguro?',
        text: 'Una vez eliminado, no podras recuperar esta consulta',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
        deleteSpace(date.eventId);
        swal('Tu consulta ha sido eliminada', {
            icon: 'success',
        });
        eventContainer.innerHTML = '';
        }
    });
    } else {
    swal('No puedes eliminar esta consulta');
    }
    });

    eventContainer.querySelector('.edit').addEventListener('click', async () => {
    if (user === date.id) {
        window.location.href = `#/editSpace?spaceId=${date.eventId}`;
    } else {
        console.log('No puedes editar este evento');
    }
    });

    return eventContainer;
};

const doctorAppointment = async () => {
    const container = document.createElement('section');
    const user = JSON.parse(localStorage.getItem('session')).user.uid;
    const exportData = async () => {        
        const querySnapshot = await getEvents(user);
        querySnapshot.forEach((doc) => {
            if (user === doc.id) {
                container.insertAdjacentElement('beforeend', timelineDoctor({ ...doc.data(), eventId: doc.id })); 
            };           
        });             
    };

    await exportData(); 
    return container;
};

export default doctorAppointment;