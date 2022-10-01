import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import InfiniteCarousel from 'components/Molecules/InfiniteCarousel';
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
      // onClick={() => router.push('/detail/511')}
    >
      <InfiniteCarousel
        imgUrlArr={[
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/121430-ss.jpg',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-07-24/131254-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20%284%29.jpg',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/122323-%EB%A6%AC%EC%8A%A4%ED%8A%B8.png',
        ]}
        width="100vw"
        height="500px"
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
