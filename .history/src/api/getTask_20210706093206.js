import axiosService from '../Service/axios/axios';

const url = 'localhost:3000';
const endpoint = 'task';

export const fectTask = () => axiosService.get(`${url}/${endpoint}`);

export const postTask = () => axiosService.get(`${url}/${endpoint}`);
