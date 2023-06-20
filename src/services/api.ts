import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.timeout = 100000

export const loginApi = axios.create({
  baseURL: process.env.REACT_APP_API_LOGIN,
});

export default api;


