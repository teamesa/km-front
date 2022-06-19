import { Box, Layout } from 'components/Atoms';
import Record from 'components/Organisms/Archive/Record';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Archive() {
  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 기록하기',
    headerRight: 'disabled',
  });

  return (
    <Layout>
      <Record />
      <Box height="60px" />
    </Layout>
  );
}
