import { atom } from 'recoil';

export type UpdateType =
  | 'phoneNumber'
  | 'name'
  | 'gender'
  | 'birthDay'
  | 'email';

export interface UserModifyInfoInterface {
  name?: string;
  email?: string;
  gender?: string;
  phoneNumber?: string;
  birthDay?: string;
}

export const UserModifyInfo = atom<UserModifyInfoInterface>({
  key: 'userModifyInfo',
  default: {
    email: '',
  },
});

export const UserModifyErrorInfo = atom<UserModifyInfoInterface>({
  key: 'userModifyAlertInfo',
  default: {
    email: '',
  },
});
