const userProfile = () => {
    const view = `
    <div class="user-container">
        <img src="../assets/user.jpg" alt="user photo">
        <h1>Daniela Torres</h1>
        <h3>#123456789</h3>
        <select name="Especialidad" id="">
            <option value="">Especialidad</option>
            <option value="psicologia">Psicología</option>
            <option value="general">Medicina general</option>
        </select>
    </div>
    `

    const container = document.createElement('section');
    container.innerHTML = view;
    return container;
}

export default userProfile;