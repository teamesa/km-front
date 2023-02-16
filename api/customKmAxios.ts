import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { ERROR } from 'constants/error';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.FRONT_URL,
  withCredentials: true,
};

const customKmAxios: AxiosInstance = axios.create(axiosConfig);

customKmAxios.interceptors.response.use(
  (res) => {
    if (res.status !== 200) {
      console.log('err', res);
      return Promise.reject(res);
    }
    console.log('200', res);
    return res;
  },
  (err) => {
    const error = {
      ...err,
      response: {
        ...err.res,
        alert:
          err.res?.data?.code && ERROR[err.res?.data?.code]
            ? {
                title: ERROR[err.res?.data?.code].title,
                description: ERROR[err.res?.data?.code].message,
              }
            : undefined,
      },
    };
    throw error;
  },
);

export { customKmAxios };
