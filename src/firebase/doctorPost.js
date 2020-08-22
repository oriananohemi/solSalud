import { database } from './init';

export const doctorPost = (info) => {
    database.collection('citasDoctor')
    .add(info)
    .then((res) => {
      console.log(res);
      window.location.href = '#/perfil-doctor';
    });
};

export const getEvent = id => database.collection('citasDoctor').doc(id).get();

export const getEvents = () => database.collection('citasDoctor').orderBy('fechaPublicacion', 'desc').get();

export const deleteSpace = id => database.collection('citasDoctor').doc(id).delete();

export const editSpace = async (id, data) => database.collection('citasDoctor').doc(id).update(data);

export const getEventById = id => database.collection('users').doc(id).get();
