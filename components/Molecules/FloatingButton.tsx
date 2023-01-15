import { css } from '@emotion/react';
import router from 'next/router';

import { Folder } from 'assets/mypage/Folder';
import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function FloatingButton() {
  return (
    <Box
      position="fixed"
      bottom="80px"
      left="0"
      right="0"
      margin="0 auto"
      maxWidth={theme.view.webView}
      zIndex="100"
      onClick={() => router.push('/archive')}
    >
      <Box
        position="absolute"
        bottom="0"
        right="15px"
        width="50px"
        height="50px"
        zIndex="100"
      >
        <Folder />
      </Box>
      <Box
        position="absolute"
        bottom="0"
        right="15px"
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
