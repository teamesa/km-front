import { css } from '@emotion/react';
import Image from 'next/image';
import { RefObject, useState } from 'react';

import DetailNoData from 'assets/detail/noData';
import { Profile } from 'assets/mypage';
import { Box, FlexBox, Span, Tag } from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import InnerHTML from 'components/Molecules/InnerHTML';
import StarScope from 'components/Molecules/StarScope';
import ArchiveHeart from 'components/Organisms/Detail/Description/ArchiveHeart';
import { ArchiveContents } from 'states/detail';
import theme from 'styles/theme';
interface ArchiveProps {
  data: ArchiveContents;
  scrollRef: RefObject<HTMLDivElement>;
  introYn: number;
}
export default function Archive({ data, scrollRef, introYn }: ArchiveProps) {
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    setChecked(!checked);
  };
  if (data.archives.length === 0) {
    return (
      <Box ref={scrollRef}>
        <Box
          paddingTop="100px"
          margin="0 auto"
          height="700px"
          textAlign="center"
        >
          <DetailNoData />
          <Box marginTop="20px" fontSize="13px" lineHeight="20px">
            아카이브가 비어있습니다.
            <br /> 코멘트를 기록해주세요.
          </Box>
          <Box width="100%" height="60px" />
          <Box width="100%" height="var(--platformBottomArea)" />
        </Box>
      </Box>
    );
  }

  const makeAvgStarRating = () => {
    const rating = data.avgStarRating * 20;
    return `${rating + 1.5}%`;
  };

  const Start = () => {
    return (
      <Span width="21px" height="20px" paddingLeft="6px">
        ★
      </Span>
    );
  };

  const StartRatingImage = () => {
    return (
      <Box
        color={theme.colors.black}
        position="relative"
        width="max-content"
        css={css`
          unicode-bidi: bidi-override;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1.3px;
          -webkit-text-stroke-color: black;
        `}
      >
        <Box
          position="absolute"
          zIndex="1"
          overflow="hidden"
          css={css`
            -webkit-text-fill-color: black;
          `}
          width={makeAvgStarRating()}
        >
          <Start />
          <Start />
          <Start />
          <Start />
          <Start />
        </Box>
        <Box zIndex="0" padding="0">
          <Start />
          <Start />
          <Start />
          <Start />
          <Start />
        </Box>
      </Box>
    );
  };

  return (
    <Box ref={scrollRef}>
      {introYn === 2 ? <Box paddingTop="80px" /> : null}
      <FlexBox paddingBottom="18px" justifyContent="space-between">
        <Box fontSize="15px" color={theme.colors.black} fontWeight={500}>
          아카이브
        </Box>
        <FlexBox alignItems="center">
          <Box fontSize="12px" color={theme.colors.gray77} paddingRight="10px">
            사진 아카이브만
          </Box>
          <CheckBox type="checkbox" onChange={onClick} />
        </FlexBox>
      </FlexBox>
      <Box height="1px" backgroundColor={theme.colors.black} />
      <Box color={theme.colors.black} fontSize="22px" paddingTop="30px">
        <FlexBox alignItems="center">
          <StartRatingImage />
          <Box paddingLeft="16px">{data.avgStarRating}</Box>
          <Box color={theme.colors.grayAA}>
            <Span color={theme.colors.grayBB} padding="0 5px">
              /
            </Span>
            5
          </Box>
        </FlexBox>
        <Box paddingTop="20px">
          {data.archives.map((item, index) => (
            <Box key={index}>
              <Box
                height="1px"
                backgroundColor={theme.colors.grayEE}
                marginBottom="24px"
              />
              <FlexBox
                alignItems="center"
                justifyContent="space-between"
                marginBottom="24px"
              >
                <FlexBox>
                  {item.userProfileUrl ? (
                    <Box
                      width="50px"
                      height="50px"
                      borderRadius="50%"
                      overflow="hidden"
                    >
                      <Image
                        src={item.userProfileUrl}
                        width="50px"
                        height="50px"
                        alt=""
                      />
                    </Box>
                  ) : (
                    <Profile width="50px" height="50px" />
                  )}
                  <Box padding="8px 10px" fontSize="13px">
                    <Box color={theme.colors.black}>{item.userName}</Box>

                    <FlexBox alignItems="center">
                      <StarScope
                        currentStep={Math.round(item.starRating)}
                        width="10.5px"
                        height="10px"
                        margin="0 2.5px"
                      />
                      <Box padding="0 10px" color={theme.colors.grayEE}>
                        |
                      </Box>
                      <Box color={theme.colors.gray99} fontSize="11px">
                        {item.updatedAt}
                      </Box>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Box height="20px">
                  <ArchiveHeart
                    heart={item.heart}
                    heartCount={item.likeCount}
                  />
                </Box>
              </FlexBox>
              {item.photoUrls ? (
                <Box marginBottom="15px">
                  {item.photoUrls.map((photo, index) => (
                    <Box key={index}>
                      <Image
                        src={photo}
                        width="345px"
                        height="345px"
                        alt=""
                        layout="intrinsic"
                      />
                    </Box>
                  ))}
                </Box>
              ) : null}
              {item.comment ? (
                <Box
                  fontSize="13px"
                  lineHeight="1.54"
                  textAlign="left"
                  marginBottom="12px"
                >
                  <InnerHTML data={item.comment} />
                </Box>
              ) : null}
              {item.cafe || item.food ? (
                <Box
                  backgroundColor={theme.colors.grayF8}
                  padding="20px 15px"
                  fontSize="12px"
                  marginBottom="24px"
                >
                  {item.food ? <Box>다녀온 맛집 : {item.food}</Box> : null}
                  {item.cafe ? (
                    <Box paddingTop={item.food ? '10px' : '0'}>
                      다녀온 카페 : {item.cafe}
                    </Box>
                  ) : null}
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>
        <Box width="100%" height="60px" />
        <Box width="100%" height="var(--platformBottomArea)" />
      </Box>
    </Box>
  );
}
