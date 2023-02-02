import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { ERROR } from 'constants/error';

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
