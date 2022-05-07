import type { NextPage } from 'next';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import ListFilter from 'components/Molecules/ListFilter';
import ListCategory from 'components/Organisms/List/ListCategory';
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
      <ListCategory
        data={[
          { label: 'ALL', value: '' },
          { label: '전시회', value: 'exhibition' },
          { label: '콘서트', value: 'concert' },
          { label: '뮤지컬', value: 'musical' },
          { label: '뮤직페스티벌', value: 'musicFestival' },
        ]}
      />
      <Layout>
        <Box margin="14px 0 10px">
          <Tag color={theme.colors.lime} background={theme.colors.black}>
            전시회
          </Tag>
          <Tag color={theme.colors.black} background={theme.colors.lightGray}>
            D-63
          </Tag>
        </Box>
      </Layout>
    </>
  );
};

export const getServerSideProps = useUserProps;
export default Home;
