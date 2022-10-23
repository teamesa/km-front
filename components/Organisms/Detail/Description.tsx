import Link from 'next/link';
import { useRouter } from 'next/router';
import { createRef, Suspense, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { Box, Button, Span, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import InnerHTML from 'components/Molecules/InnerHTML';
import Archive from 'components/Organisms/Detail/Description/Archive';
import BottomSheetHeader from 'components/Organisms/Detail/Description/BottomSheetHeader';
import { DetailNavigation } from 'components/Organisms/Detail/Description/DetailNavigation';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import Summary from 'components/Organisms/Detail/Description/Summary';
import {
  detailArchiveState,
  detailIntroductionState,
  detailSummaryState,
  useResetDetailArchiveFunction,
} from 'states/detail';
import theme from 'styles/theme';

export default function Description() {
  const router = useRouter();
  const { id } = router.query;
  const archiveRef = createRef<HTMLDivElement>();
  const introduceRef = createRef<HTMLDivElement>();
  const introductionData = useRecoilValue(detailIntroductionState(Number(id)));
  const archiveData = useRecoilValue(detailArchiveState(Number(id)));

  const tabViewData =
    introductionData.summary === null && introductionData.photo.length === 0
      ? [{ ...archiveData }]
      : [
          { contents: { ...introductionData }, title: '소개' },
          { ...archiveData },
        ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
