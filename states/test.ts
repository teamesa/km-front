import axios from 'axios';
import { atom, selector } from 'recoil';

interface TestProps {
  id: any;
  service: any;
  memo: any;
  createdAt: any;
}

export const testSate = selector({
  key: 'testSate',

  get: async ({ get }) => {
    let response;
    try {
      response = await axios.get<TestProps>(
        'http://azxca1731.synology.me:4000/hello-example',
      );
    } catch (error) {
      console.log(error);
    }
    console.log('response', response?.data);
    return response?.data;
  },
});
