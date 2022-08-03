import { Box, Layout } from 'components/Atoms';
import ArchiveHome from 'components/Organisms/Archive/ArchiveHome';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function ArchiveUpdate() {
  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 수정하기',
    headerRight: 'disabled',
  });

  return (
    <Layout>
      <ArchiveHome />
      <Box height="60px" />
    </Layout>
  );
}
