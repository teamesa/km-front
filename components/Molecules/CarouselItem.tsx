import { css } from '@emotion/react';
import Image from 'next/image';

import Box from 'components/Atoms/Box';
import CarouselDim from 'components/Molecules/CarouselDim';
import theme from 'styles/theme';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';

export default function CarouselItem({
  itemOrder,
  imgUrl,
  rootRef,
  handleIndicator,
  width,
  height,
  dimOption,
}: {
  itemOrder: number;
  imgUrl: string;
  rootRef: any;
  handleIndicator: Function;
  width: string;
  height: string;
  dimOption?: boolean;
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
    threshold: 0.2,
    onIntersect,
  });

  return (
    <Box
      width={width}
      maxWidth={theme.view.webView}
      height={height}
      position="relative"
      ref={setTarget}
      css={css`
        scroll-snap-align: end;
      `}
    >
      <Image src={imgUrl} alt="image" layout="fill" />
      {dimOption ? <CarouselDim height={height} /> : <></>}
    </Box>
  );
}
