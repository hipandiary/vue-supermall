import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:  'http://123.207.32.32:8000/api/v1',
    timeout: 5000,
  })
  instance.interceptors.response.use(res => {
    return res.data;
  },error => {
  return Promise.reject(error);
  });

  return instance(config)
}
