import ArrowDown from 'assets/list/ArrowDown';
import Filter from 'assets/list/Filter';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import ListFilter from 'components/Molecules/ListFilter';
import ListSection from 'components/Organisms/List/ListSection';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function List() {
  useInitHeader({ headerLeft: 'disabled' });

  return (
    <>
      <FlexBox>
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
