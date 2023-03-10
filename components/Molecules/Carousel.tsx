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

  // useRef 훅 예제
  // const [offsetLeft, setHeight] = useState(0);
  // const ref = useRef<any>(null);

  // useEffect(() => {
  //   if (ref?.current?.offsetHeight) {
  //     setHeight(ref.current.offsetHeight);
  //   }
  // }, []);

  //TODO: 마우스 클릭하여 드래그 horizontal 스크롤

  // 아이템 감싸는 부모 ele
  // const slider = document.querySelector('.items');
  const sliderRef = useRef<any>(null);

  const [nowOffsetLeft, setNowOffsetLeft] = useState(0);

  useEffect(() => {
    if (sliderRef?.current?.offsetLeft) {
      setNowOffsetLeft(sliderRef.current.offsetLeft);
    }
  }, []);

  const test = () => {
    console.log(sliderRef?.current.offsetLeft);
  };

  const mouseDragScroll = () => {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    // slider?.addEventListener('mousedown', (e) => {
    //   isDown = true;
    //   slider.classList.add('active');
    //   startX = e.pageX - slider.offsetLeft;
    //   scrollLeft = slider.scrollLeft;
    // });

    sliderRef?.current.addEventListener('mousedown', (e: React.MouseEvent) => {
      isDown = true;
      startX = e.pageX - sliderRef?.current?.offsetLeft; // 브라우저 x 축 마우스 좌표 -
      scrollLeft = sliderRef.current.scrollLeft;
      console.log(`마우스클릭위치 scrollLeft : ${scrollLeft}`);
    });

    // slider?.addEventListener('mouseleave', () => {
    //   isDown = false;
    //   slider.classList.remove('active');
    // });

    sliderRef?.current?.addEventListener('mouseleave', () => {
      isDown = false;
    });

    // slider?.addEventListener('mouseup', () => {
    //   isDown = false;
    //   slider.classList.remove('active');
    // });

    sliderRef?.current?.addEventListener('mouseup', () => {
      isDown = false;
    });

    // grap and scroll
    // slider?.addEventListener('mousemove', (e) => {
    //   if (!isDown) return;
    //   e.preventDefault();
    //   const x = e.pageX - slider.offsetLeft;
    //   const walk = (x - startX) * 3; // scroll-fast
    //   slider.scrollLeft -= walk;
    // });

    sliderRef?.current?.addEventListener('mousemove', (e: React.MouseEvent) => {
      if (!isDown) return; // 안누르고 마우스 움직일때.
      e.preventDefault();
      console.log(`pageX: ${e.pageX}`); // 브라우저 x 축에서의 마우스좌표
      console.log(
        `sliderRef?.current?.offsetLeft: ${sliderRef?.current?.offsetLeft}`, // 현재 스크롤 x 위치
      );
      const x = e.pageX - sliderRef?.current?.offsetLeft;
      console.log(`x: ${x}`); // 현재마우스좌표 - 스크롤 위치
      const walk = x - startX; // 이동한거리. 마이너스값이면 왼쪽으로 이동, 플러스면 오른쪽으로 이동
      setNowOffsetLeft(scrollLeft - walk);
      // console.log(`현재 이동하는 스크롤left : ${nowOffsetLeft}`);
    });
  };

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
