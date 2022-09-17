import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useState } from 'react';

import Box from 'components/Atoms/Box';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';

export default function CarouselItem({
  itemOrder,
  imgUrl,
  rootRef,
  handleIndicator,
}: {
  itemOrder: number;
  imgUrl: string;
  rootRef: any;
  handleIndicator: Function;
}) {
  const onIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        handleIndicator(itemOrder + 1);
      }
    });
  };

  const setTarget = useIntersectionObserver({
    root: rootRef.current,
    threshold: 0.9,
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
