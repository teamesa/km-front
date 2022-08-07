import { atom } from 'recoil';

import { ModalProps } from 'constants/type/initialModal';

export const modalState = atom<ModalProps[]>({
  key: 'modalState',
  default: [],
});

export const modalOutState = atom<boolean>({
  key: 'modalOutState',
  default: false,
});
