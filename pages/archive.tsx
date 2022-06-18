import { Box, Layout } from 'components/Atoms';
import ExhibitionTitle from 'components/Organisms/Archive/ExhibitionTitle';
import Rating from 'components/Organisms/Archive/Rating';
import Write from 'components/Organisms/Archive/Write';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Archive() {
  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 기록하기',
    headerRight: 'disabled',
  });

  return (
    <Layout>
      <ExhibitionTitle />
      <Rating />
      <Write />
    </Layout>
  );
}
