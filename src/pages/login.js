const login = () => {
    const view = `
        <div class='login-container'>
            <h1>Inicia sesión</h1>
            <img src="../assets/humaaans (1).png" alt="main image">
            <form class='form-login' action="submit">
                <input type="mail">
                <input type="password">
                <button type="submit">Ingresar</button>
            </form>
            <h3>¿Olvidaste tu contraseña?</h3>
            <h3>Cancelar</h3>
        </div>
    `

    const container = document.createElement('section');
    container.innerHTML = view;
    return container;
}

export default login;