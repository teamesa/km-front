import { createRef } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box } from 'components/Atoms';
import Archive from 'components/Organisms/Detail/Description/Archive';
import BottomSheetHeader from 'components/Organisms/Detail/Description/BottomSheetHeader';
import { DetailNavigation } from 'components/Organisms/Detail/Description/DetailNavigation';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import Summary from 'components/Organisms/Detail/Description/Summary';
import { detailState } from 'states';
import theme from 'styles/theme';

export default function Description() {
  const archiveRef = createRef<HTMLDivElement>();
  const introduceRef = createRef<HTMLDivElement>();
  const { contents, state } = useRecoilValueLoadable(detailState);
  const { tabViewData } = contents;
  switch (state) {
    case 'hasValue':
      return (
        <Box position="relative" top="390px">
          <BottomSheetHeader />
          <Box
            backgroundColor={theme.colors.white}
            padding="0 15px 60px"
            marginTop="-1px"
          >
            <Summary />
            <DetailNavigation
              deatailMetaInfo={tabViewData}
              archiveRef={archiveRef}
              introduceRef={introduceRef}
            />
            {tabViewData.map(
              ({ title, contents }: { title: string; contents: any }) =>
                title === '아카이브' ? (
                  <Archive
                    key={title}
                    data={contents}
                    scrollRef={archiveRef}
                    introYn={tabViewData.length}
                  />
                ) : title === '소개' ? (
                  <Introduce
                    key={title}
                    data={contents}
                    scrollRef={introduceRef}
                  />
                ) : (
                  <div />
                ),
            )}
          </Box>
        </Box>
      );
    case 'loading':
      return <Box>Loading</Box>;
    case 'hasError':
      throw Error('정보를 가져오는데 실패했습니다.');
  }
}
