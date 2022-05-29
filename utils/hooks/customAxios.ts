import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.FRONT_URL,
    withCredentials: true,
  };

  return axios.create(axiosConfig);
};

export default customAxios;
