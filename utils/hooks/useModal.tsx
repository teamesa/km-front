import { useRecoilCallback } from 'recoil';

import { ModalProps } from 'constants/type/initialModal';
import { searchRequest } from 'states';
import { filter, makeRequestToFilters } from 'states/filter';
import { modalState } from 'states/modal';

export const useModal = () => {
  return useRecoilCallback(({ set, snapshot }) => () => {
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

    function resetFilter() {
      const modals = snapshot.getLoadable(modalState).contents;
      const searchRequestStatus = snapshot.getLoadable(searchRequest).contents;
      console.log(modals);
      console.log(searchRequestStatus);
      console.log(makeRequestToFilters(searchRequestStatus));
      if (modals[modals.length - 1]?.type === 'Filter') {
        set(filter, makeRequestToFilters(searchRequestStatus));
      }
    }

    return { onModal, offModal, resetFilter };
  })();
};
