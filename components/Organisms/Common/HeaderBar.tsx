import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import ArrowLeft from 'assets/common/header/ArrowLeft';
import HeaderHome from 'assets/common/header/HeaderHome';
import Search from 'assets/common/header/Search';
import { Box, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { headerState } from 'states/common';
import useRefUtils from 'utils/hooks/useRefUtils';

const headerLeftIcon = {
  default: <ArrowLeft />,
  logo: <>logo</>,
  disabled: <></>,
};

const headerRightIcon = {
  search: <Search />,
  disabled: <></>,
};

const headerEndIcon = {
  disabled: <></>,
  home: <HeaderHome />,
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
        padding="14px 15px"
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
          {headerLeftIcon[header.headerLeft ?? 'disabled']}
        </Box>
        <Box
          textAlign="center"
          fontSize="16px"
          fontWeight={500}
          lineHeight={1.5}
        >
          {header?.title ?? ''}
        </Box>
        <FlexBox textAlign="end" justifyContent="end" flex="0 0 auto">
          <Box
            aria-label="오른쪽 버튼"
            role="button"
            marginTop="5px"
            justifyContent="flex-end"
            height="100%"
            alignItems="center"
            onClick={header.headerRightAction}
          >
            {headerRightIcon[header.headerRight ?? 'search']}
          </Box>
          {header.headerEnd ? (
            <Box
              marginLeft="15px"
              aria-label="끝 버튼"
              role="button"
              paddingLeft="5px"
              marginTop="5px"
              justifyContent="flex-end"
              height="100%"
              alignItems="center"
              onClick={() => {
                router.push('/');
              }}
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
