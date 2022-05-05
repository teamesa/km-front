import type { NextPage } from 'next';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import ListFilter from 'components/Molecules/ListFilter';
import theme from 'styles/theme';
import { useUserProps } from 'utils/authentication/useUser';
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
          <Tag
            backgroundColor={theme.colors.black}
            color={theme.colors.neonYellow}
          >
            전시회
          </Tag>
          <Tag backgroundColor="#eee" color={theme.colors.black}>
            D-63
          </Tag>
        </Box>
      </Layout>
    </>
  );
};

export const getServerSideProps = useUserProps;
export default Home;
