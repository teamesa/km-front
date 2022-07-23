import { atom } from 'recoil';

export default atom({
  key: 'AlertState',
  default: {
    code: '',
    description: '',
  },
});
