import { css } from '@emotion/react';
import Image from 'next/image';

import { FlexBox, Box } from 'components/Atoms';

export default function Carousel({}) {
  return (
    <Box
      width="345px"
      height="345px"
      overflow="scroll"
      css={css`
        scroll-snap-type: x mandatory;
      `}
    >
      <FlexBox width="1035px" height="345px" flexDirection="row">
        <Box
          css={css`
            scroll-snap-align: center;
          `}
        >
          <Image
            src={
              'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
            }
            alt="image"
            width="345px"
            height="345px"
          />
        </Box>
        <Box
          css={css`
            scroll-snap-align: center;
          `}
        >
          <Image
            src={
              'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
            }
            alt="image"
            width="345px"
            height="345px"
          />
        </Box>
        <Box
          css={css`
            scroll-snap-align: center;
          `}
        >
          <Image
            src={
              'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
            }
            alt="image"
            width="345px"
            height="345px"
          />
        </Box>
      </FlexBox>
    </Box>
  );
}
