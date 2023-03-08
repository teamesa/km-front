import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import InfiniteCarousel from 'components/Molecules/InfiniteCarousel';
import { KeyVisualProps } from 'components/Organisms/Home/ModuleTypes';
import { headerState } from 'states/common';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';
export default function KeyVisual({ keyVisualDatas, index }: KeyVisualProps) {
  const router = useRouter();
  const setHeaderState = useSetRecoilState(headerState);
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    setHeaderState({
      headerLeft: 'logo',
      headerLeftAction() {
        router.reload();
      },
      frontTopTransparent: true,
      transparent: isIntersecting,
    });
  };

  const setTarget = useIntersectionObserver({
    onIntersect,
  });
  return (
    <Box position="relative" width="100%" height="500px">
      <InfiniteCarousel
        imgUrlList={keyVisualDatas}
        width="100vw"
        height="500px"
        plusFunction={() => router.push('/home-list')}
      />
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
