import { loginUser } from '../firebase/auth';

const login = () => {
    const loginUsers = () => {
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        loginUser(email, pass);
    };
    const view = `
        <div class='login-container'>
            <h1>Inicia sesión</h1>
            <img src="../assets/humaaans (1).png" alt="main image">
            <form id="loginForm" class='form-login'>
                <input id="email" class="form-login_input" type="mail" placeholder="Correo">
                <input id="password" class="form-login_input" type="password" placeholder="Contraseña">                
                <button id="buttonForm" class='form-login_button' type="submit">Ingresar</button>
            </form>
            <a>¿Olvidaste tu contraseña?</a>
            <a href="#/">Cancelar</a>
        </div>
    `;    

    const container = document.createElement('section');
    container.setAttribute('class', 'border__section');
    container.innerHTML = view;
    const buttonLogin = container.querySelector('#loginForm');    

    buttonLogin.addEventListener('submit', (e) => { e.preventDefault(); loginUsers(); });

    return container;
}

export default login;