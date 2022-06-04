import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { modalState } from 'states/modal';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function ModalBox({
  children,
  isOff,
}: {
  children: React.ReactNode;
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
        background={theme.colors.black}
        opacity="0.7"
        width="100vw"
        height="100vh"
        zIndex={Z_INDEX.MODAL}
      />
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100%"
        onClick={() => offModal()}
        zIndex={Z_INDEX.MODAL}
      >
        <Box onClick={(e) => e.stopPropagation()}>{children}</Box>
      </Box>
    </>
  );
}
