import { useRecoilValue } from 'recoil';

import ModalBox from 'components/Molecules/ModalBox';
import { ModalComponents } from 'constants/type/modal';
import { modalState } from 'states/common';

export default function ModalContainer() {
  const modals = useRecoilValue(modalState);

  return (
    <>
      {modals.map((modal, i) => (
        <ModalBox
          animationType={modal.animationType}
          isOff={modal.isOff}
          key={i}
        >
          {ModalComponents(modal.payload)[modal.type]}
        </ModalBox>
      ))}
    </>
  );
}
