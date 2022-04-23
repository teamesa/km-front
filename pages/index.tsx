import type { NextPage } from 'next';

import { Layout, Tag } from 'components/Atoms';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', headerEnd: 'home' });
  return (
    <Layout>
      <Tag backgroundColor="#000" color="#ceff00">
        전시회
      </Tag>
      <Tag backgroundColor="#eee" color="#000">
        D-63
      </Tag>
    </Layout>
  );
};

export default Home;
