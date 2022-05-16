import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  //api 요청 후 setResponse

  const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://azxca1731.synology.me:4000',
  };
  return axios.create(axiosConfig);
};

export default customAxios;
