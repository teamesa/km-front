import type { NextPage } from 'next';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import Select from 'components/Atoms/Select';
import ListFilter from 'components/Molecules/ListFilter';
import ListCategory from 'components/Organisms/List/ListCategory';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', headerEnd: 'home' });

  return (
    <>
      <Layout>
        <Box margin="14px 0 10px">
          <Tag color={theme.colors.lime} background={theme.colors.black}>
            전시회
          </Tag>
          <Tag color={theme.colors.black} background={theme.colors.grayEE}>
            D-63
          </Tag>
        </Box>
        <hr />
        <Box>fontWeight Test</Box>
        <Box fontWeight={800}>800</Box>
        <Box fontWeight={500}>500</Box>
        <Box fontWeight={400}>400</Box>
        <Box fontWeight={200}>200</Box>
      </Layout>
    </>
  );
};

export default Home;
