import { atom } from 'recoil';

import { POPUP_NAME } from 'constants/popupName';

export type TPopupName = typeof POPUP_NAME[keyof typeof POPUP_NAME];

export default atom<TPopupName>({
  key: 'PopupNameState',
  default: null,
});

export const setPopup = atom<boolean>({
  key: 'setPopup',
  default: false,
});
