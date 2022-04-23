import { atom } from 'recoil';

import { HeaderBarProps } from 'constants/type/common';

export const headerState = atom<HeaderBarProps>({
  key: 'headerState',
  default: {
    headerLeft: 'default',
  },
});
