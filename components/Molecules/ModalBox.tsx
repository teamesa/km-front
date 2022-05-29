import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import { modalState } from 'states/common';
import { useModal } from 'utils/hooks/useModal';

export default function ModalBox({
  children,
  isOff,
}: {
  children: React.ReactNode;
  animationType?: 'fadeIn';
  isOff?: boolean;
}) {
  const setModal = useSetRecoilState(modalState);
  const { offModal } = useModal();

  useEffect(() => {
    if (isOff) {
      setTimeout(() => {
        setModal((modals) =>
          modals.filter((_modal, index) =>
            index !== modals.length - 1 ? true : false,
          ),
        );
      }, 750);
    }
  }, [isOff, setModal]);

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        background="rgba(0,0,0,0.8)"
        width="100vw"
        height="100vh"
        css={css`
          animation: ${isOff ? 'fadeOut' : 'fadeIn'} 0.75s forwards;
        `}
      />
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100%"
        onClick={() => offModal()}
      >
        <Box onClick={(e) => e.stopPropagation()}>{children}</Box>
      </Box>
    </>
  );
}
