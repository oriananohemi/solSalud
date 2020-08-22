import swal from 'sweetalert';
import { getEvents } from '../firebase/doctorPost';
import { deleteSpace } from '../firebase/doctorPost';

const timelineDoctor = (date) => {
    const user = JSON.parse(localStorage.getItem('session')).user.uid;
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
            <div>
                <li class="delete">
                    <span class="flaticon-delete icon"></span>
                </li>
                <span class="flaticon-edit icon"></span>
            </div>
        </div>
    </div>
    `;
    
    eventContainer.innerHTML = view; 
    console.log(eventContainer);
    
    eventContainer
    .querySelector('.delete')
    .addEventListener('click', async () => {       
    if (user === date.id) {
    swal({
        title: '¿Estas seguro?',
        text: 'Una vez eliminado, no podras recuperar este Evento',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
        deleteSpace(date.eventId);
        swal('Tu Evento ha sido eliminado', {
            icon: 'success',
        });
        eventContainer.innerHTML = '';
        }
    });
    } else {
    swal('No puedes eliminar este evento');
    }
    });

    return eventContainer;
};

const doctorAppointment = async () => {
    const container = document.createElement('section');
    const exportData = async () => {
        const querySnapshot = await getEvents();
        querySnapshot.forEach((doc) => {
            console.log(doc.data());        
            container.insertAdjacentElement('beforeend', timelineDoctor({ ...doc.data(), eventId: doc.id }));        
        });
    };

    await exportData(); 
    return container;
};

export default doctorAppointment;