import { atom } from 'recoil';

import { HeaderBarProps } from 'constants/type/common';
import { ModalProps } from 'constants/type/modal';

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
