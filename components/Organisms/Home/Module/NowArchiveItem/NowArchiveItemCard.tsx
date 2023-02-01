import { css } from '@emotion/react';
import Image from 'next/image';

import { Pointer, Profile } from 'assets/mypage';
import { Box, FlexBox, Span } from 'components/Atoms';
import ArchiveHeart from 'components/Organisms/Detail/Description/ArchiveHeart';
import theme from 'styles/theme';

export default function NowArchiveItemCard() {
  const heart = {
    heartClicked: false,
    link: '',
  };

  const makeAvgStarRating = () => {
    const rating = 5 * 20;
    return `${rating + 1.5}%`;
  };

  const Start = () => {
    return <Box paddingRight="6px">★</Box>;
  };

  const StartRatingImage = () => {
    return (
      <Box
        color={theme.colors.black}
        position="relative"
        width="max-content"
        height="fit-content"
        css={css`
          unicode-bidi: bidi-override;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: black;
        `}
      >
        <Box
          display="flex"
          flexDirection="row"
          position="absolute"
          height="fit-content"
          top="0px"
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
        <Box display="flex" flexDirection="row" zIndex="0" padding="0">
          <Start />
          <Start />
          <Start />
          <Start />
          <Start />
        </Box>
      </Box>
    );
  };
  const imageUrl = null;
  return (
    <Box width="345px" height="fit-contents" marginBottom="10px">
      <Box width="345px" height="345px" position="relative">
        <Image
          src={
            'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
          }
          alt="image"
          layout="fill"
        />
        <FlexBox
          position="absolute"
          bottom="0"
          width="100%"
          height="60px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            height="60px"
            backgroundColor={theme.colors.white}
            opacity={0.8}
          />
          <FlexBox alignItems="center" zIndex={10} paddingLeft="15px">
            <Box
              width="45px"
              height="45px"
              borderRadius="50%"
              overflow="hidden"
            >
              {imageUrl ? (
                <Image src={imageUrl} width="45px" height="45px" alt="" />
              ) : (
                <Profile width="45px" height="45px" />
              )}
            </Box>
            <FlexBox padding="0 12px">
              <Box>
                <Span
                  fontSize="13px"
                  fontWeight="Bold"
                  display="-webkit-box"
                  css={css`
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                  `}
                  overflow="hidden"
                >
                  족발막국수닭갈비볶음밥감자탕떡볶이치킨피자탕수육
                </Span>
                <FlexBox fontSize="11px" alignItems="center">
                  <StartRatingImage />
                  <Box
                    marginRight="6px"
                    height="8px"
                    borderLeft={`1px solid ${theme.colors.gray99}`}
                  />
                  <Box>2022.04.02</Box>
                </FlexBox>
              </Box>
            </FlexBox>
          </FlexBox>
          <Box zIndex={10} paddingRight="15px">
            <ArchiveHeart heart={heart} heartCount={25} />
          </Box>
        </FlexBox>
      </Box>
      <Box>
        <Box
          marginTop="20px"
          marginBottom="6px"
          fontSize="15px"
          lineHeight="22px"
          fontWeight="Bold"
          css={css`
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          `}
          overflow="hidden"
        >
          2021 서울재즈페스티벌
        </Box>
        <Box
          fontSize="13px"
          lineHeight="1.54"
          color={theme.colors.gray77}
          display="-webkit-box"
          css={css`
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          `}
          overflow="hidden"
        >
          샵빱 뚜비두밥 샤바 두비두비두비두밥~
          사바두비두비두비두비바랍#$^@Q#$두밥샵빱 뚜비두밥 샤바
          두비두비두비두밥~ 사바두비두비두비두비바랍#$^@Q#$두밥샵빱 뚜비두밥
          샤바 두비두비두비두밥~ 사바두비두비두비두비바랍#$^@Q#$두밥 샵빱
          뚜비두밥 샤바 두비두비두비두밥~ 사바두비두비두비두비바랍#$^@Q#$두밥
        </Box>
        <FlexBox marginTop="10px" alignItems="center">
          <Pointer width="11px" height="15px" />
          <Span
            marginLeft="10px"
            fontSize="12px"
            lineHeight="18px"
            color={theme.colors.gray77}
          >
            성수다락, 대림창고
          </Span>
        </FlexBox>
      </Box>
    </Box>
  );
}
