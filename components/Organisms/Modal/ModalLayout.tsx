import { ReactNode } from 'react';

import { Box } from 'components/Atoms';
import ModalHeader from 'components/Molecules/ModalHeader';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

interface ModalLayoutProps {
  children: ReactNode;
}

export default function ModalLayout({ children }: ModalLayoutProps) {
  const { offModal } = useModal();
  return (
    <Box
      position="absolute"
      width="100%"
      height="auto"
      maxHeight="70%"
      minHeight="30%"
      bottom="0px"
      background={theme.colors.white}
      overflow="auto"
    >
      <ModalHeader headerLeftAction={offModal} />
      <Box position="relative" height="auto" paddingBottom="10px">
        {children}
      </Box>
    </Box>
  );
}
