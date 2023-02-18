import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { ERROR } from 'constants/error';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.FRONT_URL,
  withCredentials: true,
};

const customKmAxios: AxiosInstance = axios.create(axiosConfig);

customKmAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: any) => {
    const error = {
      ...err,
      response: {
        ...err.response,
        alert:
          err.response?.data?.code && ERROR[err.response?.data?.code]
            ? {
                message: ERROR[err.response?.data?.code].message,
              }
            : undefined,
      },
    };
    throw error;
  },
);

export { customKmAxios };
