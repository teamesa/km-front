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
  const [deviceHeight, setDeviceHeight] = useState(0);
  const [modalBoxHeight, setModalBoxHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDeviceHeight(window.innerHeight); // 모바일 디바이스 크기 셋팅
      setModalBoxHeight(deviceHeight - 180); // 180은 임의로 줬습니다
    }
  }, [deviceHeight]);

  return (
    <Box
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      height="auto"
      maxHeight="70%"
      minHeight="30%"
    >
      <ModalHeader
        headerLeftAction={() => {
          offModal();
          resetFilter();
        }}
      />
      <Box
        width="100%"
        height="auto"
        maxHeight={modalBoxHeight}
        minHeight="30%"
        bottom="0px"
        padding="30px 0px"
        background={theme.colors.white}
        overflow="auto"
      >
        <Box position="relative" height="auto" paddingBottom="10px">
          {children}
        </Box>
        <Box width="100%" height="var(--platformBottomArea)" />
      </Box>
    </Box>
  );
}
