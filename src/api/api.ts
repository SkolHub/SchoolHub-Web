import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000'
});

api.interceptors.request.use(
  async function (config) {
    const session = localStorage.getItem('session');
    if (session !== undefined && session !== null) {
      config.headers.Authorization = `Bearer ${session}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
