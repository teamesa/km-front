import { atom } from 'recoil';

export const DetailNavigationState = atom<boolean>({
  key: 'DetailNavigationState',
  default: true,
});
