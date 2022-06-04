import { useRecoilCallback } from 'recoil';

import { ModalProps } from 'constants/type/initialModal';
import { modalState } from 'states/modal';

export const useModal = () =>
  useRecoilCallback(({ set }) => () => {
    function onModal(_modal: ModalProps) {
      set(modalState, (modals) => [...modals, _modal]);
    }

    function offModal() {
      set(modalState, (modals) =>
        modals.map((modal, index) =>
          index !== modals.length - 1 ? modal : { ...modal, isOff: true },
        ),
      );
    }

    return { onModal, offModal };
  })();
