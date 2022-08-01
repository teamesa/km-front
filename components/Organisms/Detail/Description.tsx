import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { Box, Button, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import InnerHTML from 'components/Molecules/InnerHTML';
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
          <Box
            backgroundColor={theme.colors.white}
            padding="0 15px 60px"
            marginTop="-1px"
          >
            <Tag border={`1px solid ${theme.colors.black}`}>
              {summary?.type}
            </Tag>
            <Box
              marginTop="14px"
              fontSize="19px"
              fontWeight="500"
              lineHeight="26px"
            >
              {summary?.title}
            </Box>
            <Box marginTop="30px" marginBottom="60px">
              <DescriptionInfo title="기간" description={summary?.term} />
              <DescriptionInfo title="장소" description={summary?.place} />
              {summary?.feeType === '유료' ? (
                <>
                  <DescriptionInfo
                    title="입장료"
                    description={summary?.feeType}
                  />
                  {summary?.price ? (
                    <DescriptionInfo
                      title=""
                      description={<InnerHTML data={summary?.price} />}
                    />
                  ) : null}
                </>
              ) : (
                <DescriptionInfo
                  title="입장료"
                  description={summary?.feeType}
                />
              )}
              {summary?.ticketUrl ? (
                <DescriptionInfo
                  title=""
                  description={
                    <Button>
                      <Link href={summary?.ticketUrl}>
                        <a target="_blank" rel="noreferrer">
                          티켓 구매하기 {'>'}
                        </a>
                      </Link>
                    </Button>
                  }
                />
              ) : null}
              {summary?.time ? (
                <DescriptionInfo
                  title="시간"
                  description={<InnerHTML data={summary?.time} />}
                />
              ) : null}
              {summary?.homePageUrl ? (
                <DescriptionInfo
                  title="홈페이지"
                  description={
                    <Box paddingTop="20px">
                      <Button>
                        <Link href={summary?.homePageUrl}>
                          <a target="_blank" rel="noreferrer">
                            홈페이지 이동 {'>'}
                          </a>
                        </Link>
                      </Button>
                    </Box>
                  }
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
