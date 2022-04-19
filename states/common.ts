import { atom } from 'recoil';

import { HeaderBarProps, ModalProps } from '../constants/type/common';

export const headerState = atom<HeaderBarProps>({
  key: 'headerState',
  default: {
    headerLeft: 'default',
  },
});

export const modalState = atom<ModalProps[]>({
  key: 'modalState',
  default: [],
});
