import ArrowDown from 'assets/list/ArrowDown';
import Filter from 'assets/list/Filter';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import ListFilter from 'components/Molecules/ListFilter';
import ListCategory from 'components/Organisms/List/ListCategory';
import ListSection from 'components/Organisms/List/ListSection';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function List() {
  useInitHeader({
    headerRight: 'search',
    headerLeft: 'disabled',
  });

  return (
    <>
      <ListCategory
        data={[
          { label: 'ALL', value: '' },
          { label: '전시회', value: 'exhibition' },
          { label: '콘서트', value: 'concert' },
          { label: '뮤지컬', value: 'musical' },
          { label: '뮤직페스티벌', value: 'musicFestival' },
        ]}
      />
      <FlexBox
        position="sticky"
        top="97px"
        background={theme.colors.white}
        zIndex="2"
      >
        <Box flex={1}>
          <ListFilter title="조회순" icon={<ArrowDown />} />
        </Box>
        <Box flex={1}>
          <ListFilter title="상세필터" icon={<Filter />} />
        </Box>
      </FlexBox>
      <Layout marginBottom="120px">
        <ListSection />
      </Layout>
    </>
  );
}
