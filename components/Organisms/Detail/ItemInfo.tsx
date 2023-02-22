import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Box, Button, Span, Tag } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import ItemInfoDescription from 'components/Organisms/Detail/ItemInfoDescription';
import { useGetItemsById } from 'states/detail';
import theme from 'styles/theme';

export default function ItemInfo() {
  const router = useRouter();
  const data = useRecoilValue(useGetItemsById(Number(router.query.id)));

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
