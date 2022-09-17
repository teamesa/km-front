import { css } from '@emotion/react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function Carousel({}: {}) {
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
          color={theme.colors.white}
        ></Box>
      ) : null}
      <Box
        width="345px"
        height="345px"
        overflowY="hidden"
        overflowX={imgUrlArr.length < 2 ? 'hidden' : 'scroll'}
        css={css`
          scroll-snap-type: x mandatory;
        `}
        ref={scrollRef}
      >
        <FlexBox width="max-content" height="345px" flexDirection="row">
          {imgUrlArr.length > 0 ? (
            imgUrlArr.map((imgUrl, _index) => (
              <Box
                key={_index}
                css={css`
                  scroll-snap-align: start;
                `}
              >
                <Image
                  src={`${imgUrl}`}
                  alt="image"
                  width="345px"
                  height="345px"
                />
              </Box>
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