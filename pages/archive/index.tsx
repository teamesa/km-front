import { Box, Layout } from 'components/Atoms';
import ArchiveHome from 'components/Organisms/Archive/ArchiveHome';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Archive() {
  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 기록하기',
    headerRight: 'disabled',
  });

  return (
    <Layout>
      <ArchiveHome />
      <Box height="60px" />
    </Layout>
  );
}
