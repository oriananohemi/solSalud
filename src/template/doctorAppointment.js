const doctorAppointment = () => {
    const view = `
    <div class="doctor-appointment_container">
        <div class="doctor-appointment_info">
            <p>Fecha: 20/09/2020</p>
            <p>Hora: 15:00:00</p>
            <p>Direccion: ZOOM</p>
        </div>
        <div class="doctor-appointment_status">
            <p>Cita:</p>
            <p>Disponible</p>
            <div><span class="flaticon-delete icon"></span><span class="flaticon-edit icon"></span></div>
        </div>
    </div>
    `

    const container = document.createElement('section');
    container.innerHTML = view;
    return container;
}

export default doctorAppointment;