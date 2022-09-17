import { css } from '@emotion/react';
import { SetStateAction, useCallback, useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import theme from 'styles/theme';

export default function Carousel({ imgUrlArr }: { imgUrlArr: string[] }) {
  const rootRef = useRef<any>();
  const [nowIndex, setNowIndex] = useState<Number>(1);

  const handleIndicator = (index: Number) => {
    setNowIndex(index);
  };
  return (
    <Box position="relative">
      {imgUrlArr.length > 1 ? (
        <Box
          width="inherit"
          height="fit-content"
          position="absolute"
          fontSize="14px"
          lineHeight="0.91px"
          textAlign="right"
          letterSpacing="0.11px"
          bottom="15px"
          right="15px"
          zIndex="100"
          color={theme.colors.black}
        >
          <>
            {nowIndex} / {imgUrlArr.length}
          </>
        </Box>
      ) : null}
      <Box
        width="345px"
        height="345px"
        overflowY="hidden"
        overflowX={imgUrlArr.length < 2 ? 'hidden' : 'scroll'}
        css={css`
          scroll-snap-type: x mandatory;
        `}
        ref={rootRef}
      >
        <FlexBox width="max-content" height="345px" flexDirection="row">
          {imgUrlArr.length > 0 ? (
            imgUrlArr.map((imgUrl, _index) => (
              <CarouselItem
                itemOrder={_index}
                key={_index}
                imgUrl={imgUrl}
                rootRef={rootRef}
                handleIndicator={handleIndicator}
              />
            ))
          ) : (
            <Box
              width="345px"
              height="345px"
              margin="0 auto"
              fontSize="19px"
              textAlign="center"
              color={theme.colors.gray77}
            >
              사진
            </Box>
          )}
        </FlexBox>
      </Box>
    </Box>
  );
}
