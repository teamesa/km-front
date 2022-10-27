import { useEffect } from 'react';

import { Box } from 'components/Atoms';
import Description from 'components/Organisms/Detail/Description';
import ExhibitionImagesSection from 'components/Organisms/Detail/ExhibitionImagesSection';
import Navigator from 'components/Organisms/Detail/Navigator';
import { useResetDetailArchiveFunction } from 'states/detail';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Detail() {
  useInitHeader({ headerLeft: 'default', headerEnd: 'home' });
  const resetArchiveState = useResetDetailArchiveFunction();

  useEffect(() => {
    resetArchiveState();
  }, [resetArchiveState]);

  return (
    <Box backgroundColor={theme.colors.grayEE}>
      <Box height="5px" />
      <ExhibitionImagesSection />
      <Description />
      <Navigator />
    </Box>
  );
}
