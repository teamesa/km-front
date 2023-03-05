import { css } from '@emotion/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Pointer, Profile } from 'assets/mypage';
import { Box, FlexBox, Span } from 'components/Atoms';
import ArchiveHeart from 'components/Organisms/Detail/Description/ArchiveHeart';
import { RealTimeArchiveItemCardProps } from 'components/Organisms/Home/ModuleTypes';
import theme from 'styles/theme';
import { useTurnPickStateInRealTimeFunction } from 'states/home';
import router from 'next/router';
import RealtimeArchiveItemHeart from 'components/Organisms/Home/Module/RealtimeArchiveItem/RealtimeArchiveItemHeart';

export default function RealTimeArchiveItemCard({
  archive,
  moduleIndex,
}: {
  archive: RealTimeArchiveItemCardProps;
  moduleIndex: number;
}) {
  const turnPickStateInRealTimeFunction = useTurnPickStateInRealTimeFunction(
    moduleIndex,
    archive.id,
  );

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

  return (
    <Box
      position="relative"
      padding="20px 0"
      css={css`
        cursor: pointer;
      `}
    >
      <Box position="relative">
        <Box
          position="relative"
          paddingTop="100%"
          onClick={() => {
            router.push(`${archive.introduction.title.link}`);
          }}
        >
          <Image src={archive?.photo?.photoUrl} alt="image" layout="fill" />
        </Box>
        <FlexBox
          position="absolute"
          bottom="0"
          width="100%"
          height="60px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            height="60px"
            backgroundColor={archive?.metaData?.dimColor}
            opacity={archive?.metaData?.opacity}
          />
          <FlexBox alignItems="flex-start" zIndex={10}>
            <Box
              width="45px"
              height="45px"
              marginLeft="15px"
              borderRadius="50%"
              overflow="hidden"
            >
              {archive?.metaData?.user?.photoUrl ? (
                <Image
                  src={archive?.metaData?.user?.photoUrl}
                  width="45px"
                  height="45px"
                  alt=""
                />
              ) : (
                <Profile width="45px" height="45px" />
              )}
            </Box>
            <FlexBox marginTop="8px" marginLeft="12px" maxWidth="200px">
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
                  {archive?.metaData?.user?.name}
                </Span>
                <FlexBox fontSize="11px" alignItems="center">
                  <StartRatingImage />
                  <Box
                    margin="0 8px"
                    height="11px"
                    borderLeft={`1px solid ${theme.colors.gray99}`}
                  />
                  <Box lineHeight="1.45" fontSize="11px">
                    {archive?.metaData?.updatedAt}
                  </Box>
                </FlexBox>
              </Box>
            </FlexBox>
          </FlexBox>
          <Box zIndex={10} marginRight="15px">
            <ArchiveHeart
              heart={archive?.metaData?.heart}
              likeCount={archive?.metaData?.likeCount}
              id={archive?.id}
            />
          </Box>
        </FlexBox>
      </Box>
      <Box>
        <Box
          marginTop="20px"
          marginBottom="2px"
          fontSize="15px"
          lineHeight="22px"
          fontWeight="Bold"
          display="-webkit-box"
          css={css`
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          `}
          overflow="hidden"
        >
          {archive?.introduction?.title?.value}
        </Box>
        {archive.introduction.comment !== '' ? (
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
            {archive.introduction.comment}
          </Box>
        ) : (
          <></>
        )}
        {archive.introduction.places !== '' ? (
          <FlexBox marginTop="8px">
            <Pointer width="11px" height="15px" />
            <Span
              marginLeft="10px"
              fontSize="12px"
              lineHeight="18px"
              color={theme.colors.gray77}
            >
              {archive?.introduction?.places}
            </Span>
          </FlexBox>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
