import { ReactNode, useEffect, useState } from 'react';
import { useResetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import ModalHeader from 'components/Molecules/ModalHeader';
import { filter } from 'states/filter';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';
interface ModalLayoutProps {
  children: ReactNode;
}

export default function ModalLayout({ children }: ModalLayoutProps) {
  const { offModal } = useModal();
  const resetFilter = useResetRecoilState(filter);

  return (
    <Box position="absolute" width="100%" height="auto" bottom="0px">
      <ModalHeader
        headerLeftAction={() => {
          offModal();
          resetFilter();
        }}
      />
      <Box position="relative" height="100%">
        {children}
      </Box>
    </Box>
  );
}
