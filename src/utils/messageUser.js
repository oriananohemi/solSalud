const errorCodes = {
  'auth/wrong-password': 'Contraseña inválida',
  'auth/user-not-found': 'Usuario no encontrado',
  'auth/email-not-verified': 'Valida tu correo para poder ingresar',
  'auth/email-already-in-use': 'El usuario ya existe',
};

export const errorMessageHandler = (code) => {
  if (errorCodes[code]) {
    return errorCodes[code];
  }
  return 'Hubo un error, intente de nuevo';
};

const successCode = {
  'auth/user-registered': 'Revisa tu correo para continuar',
};

export const successMessageHandler = (code) => {
  if (successCode[code]) {
    return successCode[code];
  }
  return 'Listo!';
};