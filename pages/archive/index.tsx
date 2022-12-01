import { useRouter } from 'next/router';

import { Box, Layout } from 'components/Atoms';
import ArchiveHome from 'components/Organisms/Archive/ArchiveHome';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Archive() {
  const router = useRouter();

  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 기록하기',
    headerRight: 'disabled',
    headerLeftAction: () => router.push('/mypage'),
  });

  return (
    <Box padding="0 15px" background={theme.colors.white}>
      <ArchiveHome />
      <Box height="60px" />
    </Box>
  );
}
