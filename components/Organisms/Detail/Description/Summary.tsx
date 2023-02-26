import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { Box, Button, FlexBox, Span, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import InnerHTML from 'components/Molecules/InnerHTML';
import { summaryState } from 'states/detail';
import theme from 'styles/theme';

interface ItemInfoDescriptionProps {
  title: string;
  description?: any;
}

function ItemInfoDescription({ title, description }: ItemInfoDescriptionProps) {
  return (
    <FlexBox marginBottom="20px" fontSize="13px">
      <Box flex="0 0 75px" fontWeight="500" lineHeight="20px">
        {title}
      </Box>
      <Box lineHeight="20px">{description}</Box>
    </FlexBox>
  );
}

export default function Summary() {
  const data = useRecoilValue(summaryState);

  return (
    <>
      <Tag border={`1px solid ${theme.colors.black}`}>{data?.type}</Tag>
      <Box marginTop="14px" fontSize="19px" fontWeight="500" lineHeight="26px">
        {data?.title}
      </Box>
      <Box marginTop="30px" marginBottom="60px">
        <ItemInfoDescription title="기간" description={data?.term} />
        <ItemInfoDescription title="장소" description={data?.place} />
        <ItemInfoDescription
          title="입장료"
          description={
            data?.feeType === '유료' ? (
              <>
                <Box>{data?.feeType}</Box>
                <Box>{data?.price && <InnerHTML data={data?.price} />}</Box>
                {data?.ticketUrl && (
                  <Button marginTop="8px">
                    <Link href={data?.ticketUrl}>
                      <a target="_blank" rel="noreferrer">
                        <Span color={theme.colors.gray99}>
                          티켓 구매하기
                          <Span paddingLeft="8px">{'>'}</Span>
                        </Span>
                      </a>
                    </Link>
                  </Button>
                )}
              </>
            ) : (
              data?.feeType
            )
          }
        />
        {data?.time && (
          <ItemInfoDescription
            title="시간"
            description={
              <Box>
                <InnerHTML data={data?.time} />
              </Box>
            }
          />
        )}
        {data?.homePageUrl && (
          <ItemInfoDescription
            title="홈페이지"
            description={
              <Button>
                <Link href={data?.homePageUrl}>
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
        )}
      </Box>
    </>
  );
}
