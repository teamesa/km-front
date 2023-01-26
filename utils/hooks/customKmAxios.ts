import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.FRONT_URL,
  withCredentials: true,
};

const customKmAxios: AxiosInstance = axios.create(axiosConfig);
customKmAxios.interceptors.response.use(
  (res) => {
    console.log('res', res);
    return res;
  },
  (err) => {
    console.log('err', err);
    throw err;
  },
);

export { customKmAxios };
