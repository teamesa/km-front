import { Box } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function ModalBox({ children }: { children: React.ReactNode }) {
  const { offModal, resetFilter } = useModal();

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
        onClick={() => {
          offModal();
          resetFilter();
        }}
        zIndex={Z_INDEX.MODAL}
      >
        <Box onClick={(e) => e.stopPropagation()}>{children}</Box>
      </Box>
    </>
  );
}
