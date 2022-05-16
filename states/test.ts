import axios, { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';

interface TestProps {
  id: any;
  service: any;
  memo: any;
  createdAt: any;
}

// export default selector({
//   key: 'TestSate',
//   get: async () => {
// const response = await axios({
//   url: 'http://azxca1731.synology.me:4000/hello-example',
// });
// console.log('data', response.data);
// return response.data;
//   },
// });
const initialDetailState = selector({
  key: 'initialDetailState',
  get: async () => {
    // const axios = customAxios();
    // const { data } = await axios({
    //   url: '/hello-example',
    // });
    const { data } = await axios.get(
      'http://azxca1731.synology.me:4000/hello-example',
    );
    const tempData = 'rterere';

    console.log('initdata', data);
    return { memo: tempData };
  },
  set: ({}) => {},
});

export default atom({
  key: 'TestSate',
  default: selector({
    key: 'TestSate/default',
    get: ({ get }) => {
      const initialPropsState = get(initialDetailState);
      console.log('initialPropsState', initialPropsState);
      return initialDetailState ?? 'res';
    },
  }),
});
