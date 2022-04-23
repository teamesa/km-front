import type { NextPage } from 'next';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import ListFilter from 'components/Molecules/ListFilter';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', headerEnd: 'home' });
  return (
    <>
      <FlexBox>
        <Box flex={1}>
          <ListFilter title="조회순" icon={<ArrowDown />} />
        </Box>
        <Box flex={1}>
          <ListFilter title="조회순" icon={<ArrowDown />} />
        </Box>
      </FlexBox>
      <Layout>
        <Box margin="14px 0 10px">
          <Tag backgroundColor="#000" color="#ceff00">
            전시회
          </Tag>
          <Tag backgroundColor="#eee" color="#000">
            D-63
          </Tag>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
