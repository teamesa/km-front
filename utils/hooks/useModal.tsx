import { useRecoilCallback } from 'recoil';

import { ModalProps } from 'constants/type/initialModal';
import { modalState } from 'states/modal';

export const useModal = () => {
  return useRecoilCallback(({ set }) => () => {
    function onModal(_modal: ModalProps) {
      set(modalState, (modals) => [...modals, _modal]);
    }

    function offModal() {
      set(modalState, (modals) =>
        modals.filter((_modal, index) =>
          index !== modals.length - 1 ? true : false,
        ),
      );
    }

    return { onModal, offModal };
  })();
};
