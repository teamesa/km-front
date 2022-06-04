import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Box, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import TopTabView from 'components/Molecules/TopTabView';
import BottomSheetHeader from 'components/Organisms/Detail/Description/BottomSheetHeader';
import { DetailState } from 'states';
import { tempSummaryState } from 'states/detail';
import theme from 'styles/theme';

export default function Description() {
  const data = useRecoilValue(DetailState);
  const router = useRouter();
  const { id } = router.query;
  const { summary } = useRecoilValue(tempSummaryState(Number(id)));

  console.log('summary', summary);

  return (
    <Box>
      <BottomSheetHeader />
      <Box backgroundColor={theme.colors.white} padding="0 15px 60px">
        <Tag border="1px solid #000">{summary.type}</Tag>
        <Box marginTop="19px">{summary.title}</Box>
        <Box marginTop="30px" marginBottom="40px">
          <DescriptionInfo title="기간" description={summary.term} />
          <DescriptionInfo title="장소" description={summary.place} />
          <DescriptionInfo title="입장료" description={summary.feeType} />
          <DescriptionInfo title="시간" description={summary.time} />
          <DescriptionInfo title="" description={summary.homePageUrl} />
        </Box>
        <TopTabView
          data={data.map((item) => ({
            title: item.title,
            contents: item.contents,
          }))}
        />
      </Box>
    </Box>
  );
}
