import { css } from '@emotion/react';
import React from 'react';

import { Folder } from 'assets/mypage/Folder';
import { Box } from 'components/Atoms';

export default function FloatingButton() {
  return (
    <Box
      display="block"
      flex-wrap="nowrap"
      overflow="initial"
      position="fixed"
      bottom="80px"
      marginBottom="var(--platformBottomArea)"
      right="15px"
    >
      <Box position="absolute" zIndex="1000">
        <Folder />
      </Box>
      <Box
        width="50px"
        height="50px"
        borderRadius="50%"
        backgroundColor="#000"
        zIndex="-1"
        css={css`
          filter: blur(4px);
          -webkit-filter: blur(4px);
          opacity: 0.8;
        `}
      ></Box>
    </Box>
  );
}
