import { atom } from 'recoil';

export const alertState = atom({
  key: 'AlertState',
  default: {
    title: '',
    description: '',
  },
});
