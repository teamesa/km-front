import { useRecoilCallback } from 'recoil';

import { ModalProps } from 'constants/type/initialModal';
import { modalState } from 'states/modal';

export const useModal = () =>
  useRecoilCallback(({ set }) => () => {
    function onModal(_modal: ModalProps) {
      set(modalState, (modals) => [...modals, _modal]);
    }

    function offModal() {
      set(modalState, (modals) => {
        if (modals[modals.length - 1].type === 'Filter') {
          // TODO 적용된 필터만 남겨두고 다 삭제.
        }
        return modals.map((modal, index) =>
          index !== modals.length - 1 ? modal : { ...modal, isOff: true },
        );
      });
    }

    return { onModal, offModal };
  })();
