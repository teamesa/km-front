import type { NextPage } from 'next';

import { Layout } from 'components/Atoms';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', headerEnd: 'home' });
  return <Layout>home</Layout>;
};

export default Home;
