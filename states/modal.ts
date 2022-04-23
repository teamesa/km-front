import { atom } from 'recoil';

import { ModalProps } from 'constants/type/modal';

export const modalState = atom<ModalProps[]>({
  key: 'modalState',
  default: [],
});
