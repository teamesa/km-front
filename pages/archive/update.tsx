import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Box, Layout } from 'components/Atoms';
import ArchiveHome from 'components/Organisms/Archive/ArchiveHome';
import { useResetArchiveByIdStateFunction } from 'states/archiveWirte';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Archive() {
  const router = useRouter();
  const resetArchiveByIdState = useResetArchiveByIdStateFunction();

  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 수정하기',
    headerRight: 'disabled',
    headerLeftAction: () => router.back(),
  });

  useEffect(() => {
    resetArchiveByIdState();
  }, [resetArchiveByIdState]);

  return (
    <Box padding="0 15px" background={theme.colors.white}>
      <ArchiveHome />
      <Box height="60px" />
    </Box>
  );
}
