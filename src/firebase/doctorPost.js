import { database } from './init';

export const doctorPost = (info) => {
    database.collection('citasDoctor')
    .add(info)
    .then((res) => {
      console.log(res);
      window.location.href = '#/perfil-doctor';
    });
};

export const getEvents = () => database.collection('citasDoctor').orderBy('fechaConsulta', 'desc').get();