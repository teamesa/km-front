import Link from 'next/link';
import { useRouter } from 'next/router';
import { createRef } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box, Button, Span, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import InnerHTML from 'components/Molecules/InnerHTML';
import Archive from 'components/Organisms/Detail/Description/Archive';
import BottomSheetHeader from 'components/Organisms/Detail/Description/BottomSheetHeader';
import { DetailNavigation } from 'components/Organisms/Detail/Description/DetailNavigation';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import { DetailState } from 'states';
import theme from 'styles/theme';

export default function Description() {
  const router = useRouter();
  const { id } = router.query;
  const { contents, state } = useRecoilValueLoadable(DetailState(Number(id)));
  const { summary, tabViewData } = contents;
  const archiveRef = createRef<HTMLDivElement>();
  const introduceRef = createRef<HTMLDivElement>();

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
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw Error('상세페이지 정보를 가져오는데 실패했습니다.');
  }
}
