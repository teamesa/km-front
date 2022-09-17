import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import Box from 'components/Atoms/Box';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';

export default function CarouselItem({
  id,
  imgUrl,
  rootRef,
}: {
  id: number;
  imgUrl: string;
  rootRef: any;
}) {
  const onIntersect: IntersectionObserverCallback = (entries, observe) => {
    //root와 타겟이 100% 교차 되면 (threshold: 1),
    //현재 교차된 이미지의 index 번호로 indicator 업데이트 하기.
  };

  const setTarget = useIntersectionObserver({
    root: rootRef.current,
    threshold: 0.7,
    onIntersect,
  });
  return (
    <Box
      css={css`
        scroll-snap-align: start;
      `}
      ref={setTarget}
    >
      <Image src={`${imgUrl}`} alt="image" width="345px" height="345px" />
    </Box>
  );
}
