import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { Box, Button, Span, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import InnerHTML from 'components/Molecules/InnerHTML';
import { summaryState } from 'states/detail';
import theme from 'styles/theme';

export default function Summary() {
  const summary = useRecoilValue(summaryState);

  return (
    <Box>
      <Tag border={`1px solid ${theme.colors.black}`}>{summary?.type}</Tag>
      <Box marginTop="14px" fontSize="19px" fontWeight="500" lineHeight="26px">
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
                  <Button marginTop="8px">
                    <Link href={summary?.ticketUrl}>
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
          <DescriptionInfo title="입장료" description={summary?.feeType} />
        )}
        {summary?.time ? (
          <DescriptionInfo
            title="시간"
            description={
              <Box>
                <InnerHTML data={summary?.time} />
              </Box>
            }
          />
        ) : null}
        {summary?.homePageUrl ? (
          <DescriptionInfo
            title="홈페이지"
            description={
              <Button>
                <Link href={summary?.homePageUrl}>
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
