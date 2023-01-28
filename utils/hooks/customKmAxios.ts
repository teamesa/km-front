import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.FRONT_URL,
  withCredentials: true,
};

const customKmAxios: AxiosInstance = axios.create(axiosConfig);
customKmAxios.interceptors.response.use(
  (res) => {
    if (res.data.code !== 200) {
      return Promise.reject(res.data);
    }
    return res;
  },
  (err) => {
    throw err;
  },
);

export { customKmAxios };
