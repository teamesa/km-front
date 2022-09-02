import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValueLoadable } from 'recoil';

import { Box, Button, Span, Tag } from 'components/Atoms';
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

  const isShowLink = (link: string, title: string) => {
    if (link) {
      return (
        <Button marginTop="8px">
          <Link href={link}>
            <a target="_blank" rel="noreferrer">
              <Span color={theme.colors.gray99}>
                {title}
                <Span paddingLeft="8px">{'>'}</Span>
              </Span>
            </a>
          </Link>
        </Button>
      );
    }
    return;
  };

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
                    description={
                      <Box>
                        <Box>{summary?.feeType}</Box>
                        <Box>
                          {summary?.price ? (
                            <InnerHTML data={summary?.price} />
                          ) : null}
                        </Box>
                        {isShowLink(summary?.ticketUrl, '티켓 구매하기')}
                      </Box>
                    }
                  />
                </>
              ) : (
                <DescriptionInfo
                  title="입장료"
                  description={summary?.feeType}
                />
              )}
              {summary?.time ? (
                <DescriptionInfo
                  title="시간"
                  description={
                    <Box>
                      <Box>
                        <InnerHTML data={summary?.time} />
                      </Box>
                      {isShowLink(summary?.homePageUrl, '홈페이지 이동')}
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
      throw Error('상세페이지 정보를 가져오는데 실패했습니다.');
  }
}
