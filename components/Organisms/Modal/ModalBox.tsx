import { css } from '@emotion/react';
import { useResetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { filter } from 'states/filter';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function ModalBox({ children }: { children: React.ReactNode }) {
  const { offModal } = useModal();
  const resetFilter = useResetRecoilState(filter);

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="50%"
        background={theme.colors.black}
        opacity="0.7"
        width="100vw"
        height="100vh"
        maxWidth={theme.view.webView}
        zIndex={Z_INDEX.MODAL}
        css={css`
          transform: translateX(-50%);
        `}
      />
      <Box
        position="fixed"
        top="0"
        left="50%"
        width="100vw"
        height="100%"
        maxWidth={theme.view.webView}
        onClick={() => {
          offModal();
          resetFilter();
        }}
        zIndex={Z_INDEX.MODAL}
        css={css`
          transform: translateX(-50%);
        `}
      >
        <Box onClick={(e) => e.stopPropagation()}>{children}</Box>
      </Box>
    </>
  );
}
