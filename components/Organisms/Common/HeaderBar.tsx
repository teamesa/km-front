import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import ArrowLeft from 'assets/common/header/ArrowLeft';
import HeaderHome from 'assets/common/header/HeaderHome';
import WhiteLogo from 'assets/common/header/logo-white.png';
import Logo from 'assets/common/header/logo.png';
import Search from 'assets/common/header/Search';
import WhiteSearch from 'assets/common/header/search-white.png';
import { Box, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { headerState } from 'states/common';
import theme from 'styles/theme';

const headerLeftIcon = {
  default: <ArrowLeft width="30" height="30" viewBox="-10 -6 30 30" />,
  logo: <Image src={Logo} alt="image" width="136px" height="20px" />,
  disabled: <></>,
};

const headerRightIcon = {
  search: <Search width="30" height="30" viewBox="-6 -6 30 30" />,
  disabled: <></>,
};

const headerEndIcon = {
  disabled: <></>,
  home: <HeaderHome width="30" height="30" viewBox="-6 -5 30 30" />,
};

function HeaderBar() {
  const router = useRouter();
  const header = useRecoilValue(headerState);
  const resetHeader = useResetRecoilState(headerState);

  useEffect(() => {
    resetHeader();
  }, [resetHeader]);

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
      {!header.transparent ? (
        <>
          <Box
            display={header.transparent ? 'none' : ''}
            role="menubar"
            position="fixed"
            css={css`
              padding-top: env(safe-area-inset-top);
              height: calc(45px + env(safe-area-inset-top));
            `}
            top="0px"
            width="100%"
            background={theme.colors.white}
            zIndex={Z_INDEX.SKY}
          >
            <Box position="relative">
              <Box
                aria-label="왼쪽 버튼"
                role="button"
                position="absolute"
                top={header.headerLeft === 'logo' ? '13px' : '6px'}
                left={header.headerLeft === 'logo' ? '15px' : '5px'}
                width={header.headerLeft === 'logo' ? '136px' : '30px'}
                height={header.headerLeft === 'logo' ? '20px' : '30px'}
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
                fontWeight="500"
                lineHeight="45px"
              >
                {header?.title ?? ''}
              </Box>
              <FlexBox position="absolute" top="6px" right="10px">
                <Box
                  aria-label="오른쪽 버튼"
                  role="button"
                  width="30px"
                  height="30px"
                  alignItems="center"
                  onClick={header.headerRightAction}
                >
                  {headerRightIcon[header.headerRight ?? 'search']}
                </Box>
                {header.headerEnd ? (
                  <Box
                    aria-label="끝 버튼"
                    role="button"
                    width="30px"
                    height="30px"
                    onClick={() => {
                      router.push('/');
                    }}
                  >
                    {headerEndIcon[header.headerEnd]}
                  </Box>
                ) : null}
              </FlexBox>
            </Box>
          </Box>
          <Box
            css={css`
              height: calc(45px + env(safe-area-inset-top));
            `}
            display={header.frontTopTransparent ? 'none' : ''}
          />
        </>
      ) : (
        <Box
          role="menubar"
          position="fixed"
          css={css`
            padding-top: env(safe-area-inset-top);
            height: calc(45px + env(safe-area-inset-top));
          `}
          top="0px"
          width="100%"
          backgroundColor="rgba(0,0,0,0)"
          zIndex={Z_INDEX.SKY}
        >
          <Box position="relative">
            <Box
              aria-label="왼쪽 버튼"
              role="button"
              position="absolute"
              top="13px"
              left="15px"
              width="136px"
              height="20px"
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
              <Image src={WhiteLogo} alt="image" width="136px" height="20px" />
            </Box>
            <Box
              textAlign="center"
              fontSize="16px"
              fontWeight="500"
              lineHeight="45px"
            >
              {header?.title ?? ''}
            </Box>
            <FlexBox position="absolute" top="15px" right="13px">
              <Box
                aria-label="오른쪽 버튼"
                role="button"
                width="20px"
                height="20px"
                alignItems="center"
                onClick={header.headerRightAction}
              >
                <Image
                  src={WhiteSearch}
                  alt="image"
                  width="20px"
                  height="20px"
                />
              </Box>
            </FlexBox>
          </Box>
        </Box>
      )}
    </>
  );
}

export default React.memo(HeaderBar);
