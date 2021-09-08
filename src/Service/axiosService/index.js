import axios, * as others from 'axios';
import qs from 'qs';
// const FormData = require('form-data');

class AxiosService {
  constructor() {
    const instance = axios.create({
      baseURL: 'https://60e83995673e350017c21828.mockapi.io/api',
      // timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' }
    });
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
    console.log('2');
    data = qs.stringify(data);
    return this.instance.post(url, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  put(url, data) {
    data = qs.stringify(data);
    return this.instance.put(url, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
