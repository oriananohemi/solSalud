import { database } from './init';

export const doctorPost = (info) => {
    database.collection('citasDoctor')
    .add(info)
    .then((res) => {
      console.log(res);
      window.location.href = '#/timeline';
    });
  };