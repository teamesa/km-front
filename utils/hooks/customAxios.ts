import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MiwibmFtZSI6IuqwgOyXvuydgCDrp4jti7DslYTsiqQg7Iqk7YawIiwiZW1haWwiOiJraW1oYW4wNDIxQG5hdmVyLmNvbSIsImltYWdlVXJsIjpudWxsLCJyb2xlIjoiVVNFUiIsInBob25lTnVtYmVyIjoiMDEwLTkxNDUtOTg3MSIsImJpcnRoZGF0ZSI6bnVsbCwiZ2VuZGVyIjoiVU5LTk9XTiIsInByb3ZpZGVyIjoibmF2ZXIiLCJzdWIiOiIyIiwiaWF0IjoxNjUyODgyOTE5LCJleHAiOjE2NTM3NDY5MTl9.8MJ-TD-0OibUU7yPUmt-jbm2_CkG9lxN3WTSIxhTehRJvSf61odp9R2ZHsK_yP5rT3Lx_DUIgSD6joT5HkOXtw';
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
