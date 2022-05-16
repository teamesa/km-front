import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  const accessToken = document?.cookie('accessToken');
  console.log(`accessToken: ${accessToken}`);
  const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://azxca1731.synology.me:3001',
    headers: {
      'x-access-token': accessToken,
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios.create(axiosConfig);
};

export default customAxios;
