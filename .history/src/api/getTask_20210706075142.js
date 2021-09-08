import axiosService from '../Service/axios/axios';

export const fect = () => axiosService.get(`${url}/${endpoint}`);
