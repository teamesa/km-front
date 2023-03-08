import { useRecoilValue, useSetRecoilState } from 'recoil';

import ModalBox from 'components/Organisms/Modal/ModalBox';
import { ModalComponents } from 'constants/type/initialModal';
import { modalOutState, modalState } from 'states/modal';
import { useModal } from 'utils/hooks/useModal';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ModalContainer() {
  const modals = useRecoilValue(modalState);
  const setModalOutState = useSetRecoilState(modalOutState);
  const router = useRouter();

  const { offModal } = useModal();

  if (modals.length !== 0) {
    setModalOutState(true);
  } else {
    setModalOutState(false);
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      offModal();
    });

    return () => {
      router.events.off('routeChangeStart', () => {
        offModal();
      });
    };
  }, []);

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
