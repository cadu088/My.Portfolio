import api from './api';

export default async function authenticateApi(): Promise<void> {
  try {
    const body = {
      username: process.env.REACT_APP_API_USERNAME,
      password: process.env.REACT_APP_API_PASSWORD,
    };

    const { data } = await api.post('/sessions', body);

    api.defaults.headers.Authorization = `Bearer ${data.token}`;
  } catch (err) {
    throw new Error('Erro ao autenticar API');
  }
}
