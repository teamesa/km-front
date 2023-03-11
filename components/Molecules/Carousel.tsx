import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import theme from 'styles/theme';
import { Loader } from 'components/Atoms/Loader';
import { start } from 'repl';

export default function Carousel({
  imgUrlArr,
  width,
  height,
}: {
  imgUrlArr: string[];
  width: string;
  height: string;
}) {
  const rootRef = useRef<any>();
  const [nowIndex, setNowIndex] = useState<number>(1);

  const handleIndicator = (index: number) => {
    setNowIndex(index);
  };

  //TODO: 마우스 클릭하여 드래그 horizontal 스크롤

  // 아이템 감싸는 부모 ele
  // const slider = document.querySelector('.items');

  const test = () => {
    console.log(sliderRef?.current.scrollLeft);
  };

  // let isDown = false;
  // let startX: number;
  // let scrollLeft: number;
  // const [walk, setWalk] = useState(0);
  // const [updatedScrollLeft, setUpdatedScrollLeft] = useState(0);
  // const [startX, setStartX] = useState(0);
  // const [isDown, setIsDown] = useState(false);
  const sliderRef = useRef<any>(null);

  let isDown = false;
  let startX = 0;
  let updatedScrollLeft = 0;
  let walk = 0;

  const mouseDragScroll = () => {
    sliderRef.current.addEventListener('mousedown', (e: React.MouseEvent) => {
      isDown = true;
      startX = e.pageX - sliderRef.current.offsetLeft;
      updatedScrollLeft = sliderRef.current.scrollLeft;
    });

    sliderRef.current.addEventListener('mouseup', () => {
      isDown = false;
      console.log('mouseUp');
    });

    sliderRef.current.addEventListener('mouseleave', () => {
      isDown = false;
      console.log('mouseleave');
    });

    sliderRef.current.addEventListener('mousemove', (e: React.MouseEvent) => {
      if (!isDown) return null;
      e.preventDefault();
      console.log(`walk: ${walk}`);
      // setWalk(e.pageX - sliderRef.current.offsetLeft - startX);
      // setUpdatedScrollLeft(updatedScrollLeft + walk);

      walk = e.pageX - sliderRef.current.offsetLeft - startX;
      sliderRef.current.scrollLeft += updatedScrollLeft + walk;
      console.log(sliderRef.current.scrollLeft);
    });
  };

  useEffect(() => {
    if (sliderRef) {
      console.log('sliderRef 있음');
      mouseDragScroll();
    }
  });

  return (
    <Box position="relative">
      {imgUrlArr.length === 0 && (
        <Box position="absolute" top="40%" left="40%">
          <Loader />
        </Box>
      )}
      {imgUrlArr.length > 1 && (
        <FlexBox
          width="38px"
          height="22px"
          position="absolute"
          alignItems="center"
          justifyContent="space-around"
          top="0px"
          right="0px"
          zIndex="1"
          backgroundColor={theme.colors.black}
          opacity="0.4"
        >
          <FlexBox
            alignItems="center"
            width="24px"
            fontSize="11px"
            color={theme.colors.white}
            justifyContent="space-around"
          >
            <Box fontSize="11px" color={theme.colors.white}>
              {nowIndex}
            </Box>
            <Box fontSize="11px" color={theme.colors.white}>
              /
            </Box>
            <Box fontSize="11px" color={theme.colors.white}>
              {imgUrlArr.length}
            </Box>
          </FlexBox>
        </FlexBox>
      )}

      <Box
        width={width}
        height={height}
        overflowY="hidden"
        margin="0 auto"
        overflowX={imgUrlArr.length < 2 ? 'hidden' : 'scroll'}
        css={css`
          scroll-snap-type: x mandatory;
        `}
        ref={sliderRef}
        onClick={mouseDragScroll}
      >
        <FlexBox height="inherit" width="fit-content" flexDirection="row">
          {imgUrlArr.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl}
              rootRef={sliderRef}
              handleIndicator={handleIndicator}
              width={width}
              height={height}
            />
          ))}
        </FlexBox>
      </Box>
    </Box>
  );
}
