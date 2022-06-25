import { atom } from 'recoil';

export type UpdateType =
  | 'phoneNumber'
  | 'name'
  | 'gender'
  | 'birthDay'
  | 'email';

export interface UserModifyInfoInterface {
  id?: number;
  name?: string;
  email?: string;
  gender?: string;
  phoneNumber?: string;
  birthDay?: string;
}

export interface UserModifyAlertInterface {
  id?: number;
  nameMessage?: string;
  emailMessage?: string;
  genderMessage?: string;
  phoneNumberMessage?: string;
  birthDayMessage?: string;
}

export const UserModifyInfo = atom<UserModifyInfoInterface>({
  key: 'userModifyInfo',
  default: {
    email: '',
  },
});

export const UserModifyErrorInfo = atom<UserModifyAlertInterface>({
  key: 'userModifyAlertInfo',
  default: {
    emailMessage: '',
  },
});
