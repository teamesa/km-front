import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import { KeyVisualProps } from 'components/Organisms/Home/ModuleTypes';
import { headerState } from 'states/common';
import theme from 'styles/theme';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';
export default function KeyVisual({ keyvisualDatas, index }: KeyVisualProps) {
  const router = useRouter();
  const setHeaderState = useSetRecoilState(headerState);
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    setHeaderState({
      headerLeft: 'logo',
      frontTopTransparent: true,
      transparent: isIntersecting,
    });
  };

  const setTarget = useIntersectionObserver({
    onIntersect,
  });
  return (
    <Box
      position="relative"
      width="100%"
      height="500px"
      onClick={() => router.push('/detail/511')}
    >
      <Image
        src="https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/121430-ss.jpg"
        alt="image"
        layout="fill"
      />
      <Box position="absolute" bottom="60px">
        <Box paddingX="15px">
          <Box
            fontSize="30px"
            color={theme.colors.white}
            lineHeight={1.2}
            textAlign="left"
          >
            9월, 이달의 전시
          </Box>
          <Box
            fontSize="30px"
            color={theme.colors.white}
            lineHeight={1.2}
            textAlign="left"
          >
            우연히 웨스 앤더슨
          </Box>
        </Box>
      </Box>
      <Box position="absolute" bottom="15px" right="15px">
        <Box display="flex">
          <Box
            color={theme.colors.white}
            fontWeight={500}
            fontSize="11px"
            marginRight="2px"
          >
            1 /
          </Box>
          <Box
            color={theme.colors.white}
            opacity={0.5}
            fontWeight={500}
            fontSize="11px"
          >
            1
          </Box>
        </Box>
      </Box>
      <Box
        id="anchor"
        position="absolute"
        top={0}
        css={css`
          height: calc(500px - env(safe-area-inset-top) - 45px);
        `}
        ref={setTarget}
      ></Box>
    </Box>
  );
}
