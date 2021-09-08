import axiosService from '../Service/axiosService/index';

const endpoint = '/Tasks';

export const fectTask = () => axiosService.get(`${endpoint}`);

export const postTask = (data) => axiosService.post(`${endpoint}`, data);
export const putTask = (id, data) =>
  axiosService.put(`${endpoint}/${id}`, data);

export const deleteTask = (id) =>
  axiosService.delete(`${endpoint}/${id.toString()}`);
