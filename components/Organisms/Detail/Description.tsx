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

  const generateLinkUrl = ({
    title,
    link,
  }: {
    title: string;
    link: string;
  }) => {
    if (!link) {
      return null;
    }
    return (
      <Button paddingTop="8px">
        <Link href={link}>
          <a target="_blank" rel="noreferrer">
            <Box color={theme.colors.gray99}>
              {title} {'>'}
            </Box>
          </a>
        </Link>
      </Button>
    );
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
              <DescriptionInfo
                title="입장료"
                description={
                  <>
                    <Box>{summary?.feeType}</Box>
                    <Box>
                      {summary?.price ? (
                        <InnerHTML data={summary?.price} />
                      ) : null}
                    </Box>
                    {generateLinkUrl({
                      title: '티켓 구매하기',
                      link: `${summary?.ticketUrl}`,
                    })}
                  </>
                }
              />
              <DescriptionInfo
                title={summary?.time ? '시간' : ''}
                description={
                  <>
                    <Box>
                      <InnerHTML data={summary?.time} />
                    </Box>
                    {generateLinkUrl({
                      title: '홈페이지 이동',
                      link: `${summary?.homePageUrl}`,
                    })}
                  </>
                }
              />
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
