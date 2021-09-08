import axios from 'axios';
import qs from 'qs';
const FormData = require('form-data');

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSucces, this.handleError);
    this.instance = instance;
  }

  handleSucces(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, data) {
    data = qs.stringify(data);
    return this.instance.post(url, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}

export default new AxiosService();
