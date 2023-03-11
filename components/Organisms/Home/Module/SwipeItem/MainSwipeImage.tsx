import { css } from '@emotion/react';
import Image from 'next/image';

import { Box } from 'components/Atoms';
export default function MainSwipeImage({ src }: { src: string }) {
  return (
    <Box width="315px" height="420px" marginRight="15px">
      <Image
        width={315}
        height={420}
        alt="image"
        src={src}
        css={css`
          scroll-snap-align: start;
        `}
      />
    </Box>
  );
}
