import { css } from '@emotion/react';
import Image from 'next/image';
import { Key, RefObject } from 'react';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import { DetailNavigationState } from 'states/detail-navigation';
import theme from 'styles/theme';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';

export default function Introduce({
  data,
  scrollRef,
}: {
  data: any;
  scrollRef: RefObject<HTMLDivElement>;
}) {
  const setDetailNavigation = useSetRecoilState(DetailNavigationState);
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    setDetailNavigation(isIntersecting);
  };
  const setTarget = useIntersectionObserver({
    onIntersect,
    // Header Bar Height + Navigation Height = 90px
    rootMargin: '-90px',
  });

  return (
    <Box
      color={theme.colors.black}
      fontSize="13px"
      lineHeight="20px"
      textAlign="left"
      padding="40px 0 0 0"
      position="relative"
      ref={setTarget}
    >
      <Box id="introduce" top="-80px" position="absolute" ref={scrollRef}></Box>
      <Box>{data?.summary && <InnerHTML data={data?.summary} />}</Box>
      {data.photo?.map((item: any, index: Key) => (
        <Box
          marginTop="20px"
          key={index}
          width="100%"
          css={css`
            & > span {
              position: unset !important;
              & > img {
                position: relative !important;
                object-fit: contain !important;
                height: auto !important;
              }
            }
          `}
        >
          <Image
            src={
              !item
                ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
                : item
            }
            alt="image"
            width="100%"
            height="100%"
            layout="fill"
          />
        </Box>
      ))}
      <Box>[출처]</Box>
      {/* TODO */}
      {/* <InnerHTML data={} /> */}
    </Box>
  );
}
