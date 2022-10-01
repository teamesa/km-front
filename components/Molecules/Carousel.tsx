import { css } from '@emotion/react';
import { useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
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
          fontSize="14px"
          lineHeight="0.91px"
          letterSpacing="0.11px"
          bottom="0px"
          right="0px"
          zIndex="100"
          backgroundColor="black"
          opacity="0.4"
        >
          <Box
            width="fit-content"
            height="fit-content"
            marginRight="3.2px"
            color={theme.colors.white}
          >
            <>{nowIndex}</>{' '}
          </Box>
          <Box
            width="fit-content"
            height="fit-content"
            color={theme.colors.gray99}
          >
            {' '}
            / {imgUrlArr.length}
          </Box>
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
