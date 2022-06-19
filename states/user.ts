import { atom } from 'recoil';

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  imageUrl: string;
  birthdate: string;
  isLogin: boolean;
  phoneNumber: string;
}

export const makeAnnonymousUser = () => ({
  id: -1,
  name: '익명의 코다리1번가',
  email: '',
  gender: '',
  imageUrl: '',
  birthdate: '1970-01-01',
  phoneNumber: '',
  isLogin: false,
});

export const User = atom<User>({
  key: 'user',
  default: makeAnnonymousUser(),
});
