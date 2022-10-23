import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { Box, Button, Span, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import InnerHTML from 'components/Molecules/InnerHTML';
import { detailSummaryState } from 'states/detail';
import theme from 'styles/theme';

export default function Summary() {
  const router = useRouter();
  const { id } = router.query;
  const summaryData = useRecoilValue(detailSummaryState(Number(id)));

  return (
    <Box>
      <Tag border={`1px solid ${theme.colors.black}`}>{summaryData?.type}</Tag>
      <Box marginTop="14px" fontSize="19px" fontWeight="500" lineHeight="26px">
        {summaryData?.title}
      </Box>
      <Box marginTop="30px" marginBottom="60px">
        <DescriptionInfo title="기간" description={summaryData?.term} />
        <DescriptionInfo title="장소" description={summaryData?.place} />
        {summaryData?.feeType === '유료' ? (
          <>
            <DescriptionInfo
              title="입장료"
              description={
                <Box>
                  <Box>{summaryData?.feeType}</Box>
                  <Box>
                    {summaryData?.price ? (
                      <InnerHTML data={summaryData?.price} />
                    ) : null}
                  </Box>
                  <Button marginTop="8px">
                    <Link href={summaryData?.ticketUrl}>
                      <a target="_blank" rel="noreferrer">
                        <Span color={theme.colors.gray99}>
                          티켓 구매하기
                          <Span paddingLeft="8px">{'>'}</Span>
                        </Span>
                      </a>
                    </Link>
                  </Button>
                </Box>
              }
            />
          </>
        ) : (
          <DescriptionInfo title="입장료" description={summaryData?.feeType} />
        )}
        {summaryData?.time ? (
          <DescriptionInfo
            title="시간"
            description={
              <Box>
                <InnerHTML data={summaryData?.time} />
              </Box>
            }
          />
        ) : null}
        {summaryData?.homePageUrl ? (
          <DescriptionInfo
            title="홈페이지"
            description={
              <Button>
                <Link href={summaryData?.homePageUrl}>
                  <a target="_blank" rel="noreferrer">
                    <Span>
                      바로가기
                      <Span paddingLeft="8px">{'>'}</Span>
                    </Span>
                  </a>
                </Link>
              </Button>
            }
          />
        ) : null}
      </Box>
    </Box>
  );
}
