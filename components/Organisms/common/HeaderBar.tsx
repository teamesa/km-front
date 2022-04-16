import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { Box, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { headerState } from 'states/common';
import useRefUtils from 'utils/hooks/useRefUtils';

const headerLeftIcon = {
  disabled: <></>,
  logo: <>logo</>,
  default: <>ArrowLeft</>,
};

const headerRightIcon = {
  disabled: <></>,
  search: <>search</>,
};

const headerEndIcon = {
  disabled: <></>,
  home: <>home</>,
};

function HeaderBar() {
  const router = useRouter();

  const header = useRecoilValue(headerState);
  const resetHeader = useResetRecoilState(headerState);

  const { ref, height } = useRefUtils();

  useEffect(() => {
    resetHeader();
  }, [resetHeader, router.pathname]);

  return (
    <>
      <Head>
        <title>KM 킬로미터</title>
        <meta property="og:title" content="KM 킬로미터" />
        <meta
          property="og:description"
          content="내 근처 문화생활 로드맵, KM 킬로미터"
        />
      </Head>
      <FlexBox
        ref={ref}
        role="menubar"
        position="fixed"
        padding="14px 0"
        top="0px"
        width="100%"
        height="45px"
        alignItems="center"
        background="white"
        zIndex={Z_INDEX.SKY}
      >
        <Box
          flex={1}
          aria-label="왼쪽 버튼"
          role="button"
          width="80px"
          paddingLeft="15px"
          justifyContent="flex-start"
          height="100%"
          alignItems="center"
          onClick={() => {
            if (header.headerLeftAction) {
              header.headerLeftAction();
            } else {
              router.back();
            }
          }}
          css={css`
            cursor: pointer;
          `}
        >
          {headerLeftIcon[header.headerLeft ?? 'default']}
        </Box>
        <FlexBox>
          <Box
            flex={1}
            aria-label="오른쪽 버튼"
            role="button"
            width="80px"
            paddingRight="15px"
            justifyContent="flex-end"
            height="100%"
            alignItems="center"
            onClick={header.headerRightAction}
          >
            {headerRightIcon[header.headerRight ?? 'search']}
          </Box>
          {header.headerEnd ? (
            <Box
              flex={1}
              aria-label="끝 버튼"
              role="button"
              width="80px"
              paddingLeft="7px"
              justifyContent="flex-end"
              height="100%"
              alignItems="center"
              onClick={header.headerEndAction}
            >
              {headerEndIcon[header.headerEnd]}
            </Box>
          ) : null}
        </FlexBox>
      </FlexBox>
      <Box height={height} />
    </>
  );
}

export default React.memo(HeaderBar);
