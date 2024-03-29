import { css } from '@emotion/react';
import Image from 'next/image';

import { Box } from 'components/Atoms';
export default function SubSwipeImage({ src }: { src: string }) {
  return (
    <Box
      paddingY="37px"
      marginRight="15px"
      css={css`
        scroll-snap-align: start;
      `}
    >
      <Image width={260} height={347} alt="image" src={src} />
    </Box>
  );
}
