import { css } from '@emotion/react';
import { useEffect } from 'react';

import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import ListFilter from 'components/Molecules/ListFilter';
import ListCategory from 'components/Organisms/List/ListCategory';
import ListSection from 'components/Organisms/List/ListSection';
import { Z_INDEX } from 'constants/common';
import { useResetListStateFunction } from 'states/list';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function List() {
  const resetListState = useResetListStateFunction();
  useInitHeader({
    headerRight: 'search',
    headerLeft: 'disabled',
  });
  useEffect(() => {
    resetListState();
  }, [resetListState]);

  return (
    <>
      <Box
        position="sticky"
        top="env(safe-area-inset-top)"
        zIndex={Z_INDEX.SKY}
        backgroundColor={theme.colors.white}
      >
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
                { label: 'ALL', value: 'ALL' },
                { label: '전시회', value: 'EXHIBITION' },
                { label: '콘서트', value: 'CONCERT' },
                { label: '뮤지컬', value: 'MUSICAL' },
                { label: '뮤직페스티벌', value: 'FESTIVAL' },
              ]}
            />
          </Box>
        </Box>
        <FlexBox background={theme.colors.white}>
          <ListFilter />
        </FlexBox>
      </Box>
      <Layout padding="0px 15px 80px !important">
        <ListSection />
      </Layout>
    </>
  );
}
