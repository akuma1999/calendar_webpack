import axiosService from '../Service/axios/axios';

export const fectTask = () => axiosService.get(`${url}/${endpoint}`);
