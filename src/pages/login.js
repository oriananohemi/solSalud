const login = () => {
    const view = `
        <div class='login-container'>
            <h1>Inicia sesión</h1>
            <img src="../assets/humaaans (1).png" alt="main image">
            <form class='form-login' action="submit">
                <input class="form-login_input" type="mail" placeholder="Correo">
                <input class="form-login_input" type="password" placeholder="Contraseña">
                <button class='form-login_button' type="submit">Ingresar</button>
            </form>
            <a>¿Olvidaste tu contraseña?</a>
            <a>Cancelar</a>
        </div>
    `

    const container = document.createElement('section');
    container.innerHTML = view;
    return container;
}

export default login;