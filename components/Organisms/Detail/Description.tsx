import { useRouter } from 'next/router';
import { useRecoilValueLoadable } from 'recoil';

import { Box, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import TopTabView from 'components/Molecules/TopTabView';
import BottomSheetHeader from 'components/Organisms/Detail/Description/BottomSheetHeader';
import { DetailState } from 'states';
import theme from 'styles/theme';

export default function Description() {
  const router = useRouter();
  const { id } = router.query;
  const { contents, state } = useRecoilValueLoadable(DetailState(Number(id)));
  const { summary, tabViewData } = contents;

  switch (state) {
    case 'hasValue':
      return (
        <Box position="relative" top="390px">
          <BottomSheetHeader />
          <Box backgroundColor={theme.colors.white} padding="0 15px 60px">
            <Tag border={`1px solid ${theme.colors.black}`}>{summary.type}</Tag>
            <Box marginTop="19px">{summary.title}</Box>
            <Box marginTop="30px" marginBottom="40px">
              <DescriptionInfo title="기간" description={summary.term} />
              <DescriptionInfo title="장소" description={summary.place} />
              {summary.feeType === '유료' ? (
                <>
                  <DescriptionInfo
                    title="입장료"
                    description={summary.feeType}
                  />
                </>
              ) : (
                <DescriptionInfo title="입장료" description={summary.feeType} />
              )}

              {summary.ticketUrl ? (
                <DescriptionInfo
                  title="티켓구매"
                  description={summary.ticketUrl}
                />
              ) : null}
              {summary.time ? (
                <DescriptionInfo title="시간" description={summary.time} />
              ) : null}
              {summary.homePageUrl ? (
                <DescriptionInfo
                  title="홈페이지"
                  description={summary.homePageUrl}
                />
              ) : null}
            </Box>
            <TopTabView
              data={tabViewData.map((item: { title: any; contents: any }) => ({
                title: item.title,
                contents: item.contents,
              }))}
            />
          </Box>
        </Box>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw <div>Error....</div>;
  }
}
