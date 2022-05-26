import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';

interface TGetTest {
  createdAt: string;
  id: number;
  memo: string;
  service: string;
}

export default atom({
  key: 'TestSate',
  default: selector({
    key: 'TestSate/default',
    get: async () => {
      const axios = customAxios();
      const { data } = (await axios({
        url: `/hello-example`,
        method: 'GET',
      })) as AxiosResponse<TGetTest>;

      return data;
    },
  }),
});
