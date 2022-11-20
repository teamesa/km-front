import { css } from '@emotion/react';

import Box from 'components/Atoms/Box';

const CarouselDim = ({ height }: { height: string }) => (
  <Box
    width="100vw"
    height="230px"
    top="270px"
    opacity={0.4}
    position="absolute"
    css={css`
      top: calc(${height} - 230px);
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.75) 79%,
        #000
      );
    `}
  ></Box>
);
export default CarouselDim;
