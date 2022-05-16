import { AxiosError } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';

export default atom({
  key: 'TestSate',
  default: selector({
    key: 'TestSate/default',
    get: async () => {
      try {
        const axios = customAxios();
        const response = await axios('/hello-example');
        return response.data;
      } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
          console.log(err.response.status);
          console.log(err.response.data);
        }
      }
    },
  }),
});
