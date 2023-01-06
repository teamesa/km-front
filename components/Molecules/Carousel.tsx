import { css } from '@emotion/react';
import { useRef, useState } from 'react';

import { FlexBox, Box, Span } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import theme from 'styles/theme';

export default function Carousel({
  imgUrlArr,
  width,
  height,
}: {
  imgUrlArr: string[];
  width: string;
  height: string;
}) {
  const rootRef = useRef<any>();
  const [nowIndex, setNowIndex] = useState<number>(1);

  const handleIndicator = (index: number) => {
    setNowIndex(index);
  };
  return (
    <Box position="relative">
      {imgUrlArr.length > 1 ? (
        <FlexBox
          width="38px"
          height="22px"
          position="absolute"
          alignItems="center"
          justifyContent="space-around"
          top="0px"
          right="0px"
          zIndex="100"
          backgroundColor={theme.colors.black}
          opacity="0.4"
        >
          <FlexBox
            alignItems="center"
            width="24px"
            fontSize="11px"
            color={theme.colors.white}
            justifyContent="space-around"
          >
            <Box fontSize="11px" color={theme.colors.white}>
              {nowIndex}
            </Box>
            <Box fontSize="11px" color={theme.colors.white}>
              /
            </Box>
            <Box fontSize="11px" color={theme.colors.white}>
              {imgUrlArr.length}
            </Box>
          </FlexBox>
          {/* <Box
            width="fit-content"
            height="fit-content"
            marginRight="3.2px"
            lineHeight="10px"
            fontSize="11px"
            color={theme.colors.white}
          >
            {nowIndex}
          </Box>
          <Box
            width="fit-content"
            height="fit-content"
            marginRight="3.2px"
            lineHeight="10px"
            fontSize="11px"
            color={theme.colors.white}
          >
            /
          </Box>
          <Box
            width="fit-content"
            height="fit-content"
            lineHeight="10px"
            fontSize="11px"
            color={theme.colors.gray99}
          >
            {imgUrlArr.length}
          </Box> */}
        </FlexBox>
      ) : null}
      <Box
        width={width}
        height={height}
        overflowY="hidden"
        overflowX={imgUrlArr.length < 2 ? 'hidden' : 'scroll'}
        css={css`
          scroll-snap-type: x mandatory;
        `}
        ref={rootRef}
      >
        <FlexBox height="inherit" width="fit-content" flexDirection="row">
          {imgUrlArr.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl}
              rootRef={rootRef}
              handleIndicator={handleIndicator}
              width={width}
              height={height}
            />
          ))}
        </FlexBox>
      </Box>
    </Box>
  );
}
