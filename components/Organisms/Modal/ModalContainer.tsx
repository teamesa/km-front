import { useRecoilValue } from 'recoil';

import ModalBox from 'components/Organisms/Modal/ModalBox';
import { ModalComponents } from 'constants/type/initialModal';
import { modalState } from 'states/modal';

export default function ModalContainer() {
  const modals = useRecoilValue(modalState);

  return (
    <>
      {modals.map((modal, i) => (
        <ModalBox isOff={modal.isOff} key={i}>
          {ModalComponents(modal.payload)[modal.type]}
        </ModalBox>
      ))}
    </>
  );
}
