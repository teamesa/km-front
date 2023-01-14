import { css } from '@emotion/react';

import { Box } from 'components/Atoms';
import { Loader } from 'components/Atoms/Loader';
import theme from 'styles/theme';
export default function LoadingArchiveSquare() {
  return (
    <Box
      width="111px"
      height="111px"
      backgroundColor={theme.colors.gray99}
      position="relative"
    >
      <Box
        width="60px"
        height="60px"
        position="absolute"
        top="25.5px"
        left="25.5px"
        css={css`
          transform: scale(0.65);
        `}
      >
        <Loader />
      </Box>
    </Box>
  );
}
