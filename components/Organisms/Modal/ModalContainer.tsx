import { useRecoilValue, useSetRecoilState } from 'recoil';

import ModalBox from 'components/Organisms/Modal/ModalBox';
import { ModalComponents } from 'constants/type/initialModal';
import { modalOutState, modalState } from 'states/modal';

export default function ModalContainer() {
  const modals = useRecoilValue(modalState);
  const setModalOutState = useSetRecoilState(modalOutState);

  if (modals.length !== 0) {
    setModalOutState(true);
  } else {
    setModalOutState(false);
  }

  return (
    <>
      {modals.map((modal, i) => (
        <ModalBox key={i}>
          {ModalComponents(modal.payload)[modal.type]}
        </ModalBox>
      ))}
    </>
  );
}
