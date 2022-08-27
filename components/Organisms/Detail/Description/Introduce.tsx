import Image from 'next/image';
import { RefObject } from 'react';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import { DetailNavigationState } from 'states/detail-navigation';
import theme from 'styles/theme';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';

interface IntroduceProps {
  scrollRef: RefObject<HTMLDivElement>;
  data: { summary: string; photo: string[] };
}
export default function Introduce({ data, scrollRef }: IntroduceProps) {
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
      <Box>
        <InnerHTML data={data.summary} />
      </Box>
      {data.photo?.map((item, index) => (
        <Box marginTop="20px" key={index}>
          <Image
            src={
              !item
                ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
                : item
            }
            alt="image"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </Box>
      ))}
    </Box>
  );
}
