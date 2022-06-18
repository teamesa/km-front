import { css } from '@emotion/react';

import ArrowDown from 'assets/list/ArrowDown';
import Filter from 'assets/list/Filter';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import ListFilter from 'components/Molecules/ListFilter';
import ListCategory from 'components/Organisms/List/ListCategory';
import ListSection from 'components/Organisms/List/ListSection';
import { Z_INDEX } from 'constants/common';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function List() {
  useInitHeader({
    headerRight: 'search',
    headerLeft: 'disabled',
  });

  return (
    <>
      <Box position="sticky" top="0px" zIndex={Z_INDEX.SKY}>
        <Box position="relative" overflow="auto">
          <Box
            position="relative"
            width="auto"
            background={theme.colors.white}
            css={css`
              white-space: nowrap;
            `}
          >
            <ListCategory
              data={[
                { label: 'ALL', value: '' },
                { label: '전시회', value: 'EXHIBITION' },
                { label: '콘서트', value: 'CONCERT' },
                { label: '뮤지컬', value: 'MUSICAL' },
                { label: '뮤직페스티벌', value: 'FESTIVAL' },
              ]}
            />
          </Box>
        </Box>
        <FlexBox background={theme.colors.white}>
          <Box flex={1}>
            <ListFilter title="조회순" icon={<ArrowDown />} />
          </Box>
          <Box flex={1}>
            <ListFilter title="상세필터" icon={<Filter />} />
          </Box>
        </FlexBox>
      </Box>
      <Layout marginBottom="120px">
        <ListSection />
      </Layout>
    </>
  );
}
