import { database } from './init';

export const saveUser = user => {
  if(user.perfil === 'paciente') {
    database.collection('pacientes').doc(user.id).set(user)
  } else {
    database.collection('doctores').doc(user.id).set(user)

  }
  }

export const getUserProfile = async () => {
  const infLocalStorage = localStorage.getItem('session');
  const convetInfoJson = JSON.parse(infLocalStorage);
  const userId = convetInfoJson.user.uid;

  return database.collection('pacientes').where('id', '==', userId).get();
};

export const userUpdate = async user => database.collection('pacientes').doc(user.id).update(user);