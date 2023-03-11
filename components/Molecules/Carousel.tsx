import { css } from '@emotion/react';
import { useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import theme from 'styles/theme';
import { Loader } from 'components/Atoms/Loader';

export default function Carousel({
  imgUrlArr,
  width,
  height,
}: {
  imgUrlArr: string[];
  width: string;
  height: string;
}) {
  const [nowIndex, setNowIndex] = useState<number>(1);

  const handleIndicator = (index: number) => {
    setNowIndex(index);
  };

  //마우스 클릭하여 드래그 horizontal 스크롤
  const sliderRef = useRef<any>();
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [walk, setWalk] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleMouseUp = () => {
    sliderRef.current.style.cursor = '-webkit-grab';
    sliderRef.current.style.scrollSnapType = 'x mandatory';
    setIsGrabbing(false);
  };

  const handleMouseLeave = () => {
    sliderRef.current.style.cursor = '-webkit-grab';
    sliderRef.current.style.scrollSnapType = 'none';
    setIsGrabbing(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    sliderRef.current.style.cursor = 'grabb-webkit-grabbing';
    sliderRef.current.style.scrollSnapType = 'none';
    setIsGrabbing(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft); // 움직이기 전 offSetLeft 지점
    setScrollLeft(sliderRef.current.scrollLeft); // 움직이기전 스크롤왼쪽위치
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isGrabbing) return null; //잡으면서 움직이는 상태인지 판단위해
    e.preventDefault(); // 드래그 고스트 효과 없애기
    setWalk(e.pageX - startX - sliderRef.current.offsetLeft); // 움직인 후 offSetLeft 지점
    //스크롤왼쪽위치 업데이트
    sliderRef.current.scrollLeft = scrollLeft - walk * 2;
    sliderRef.current.style.cursor = '-webkit-grabbing';
    sliderRef.current.style.scrollSnapType = 'none';
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
          scroll-snap-type: none;
        `}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
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
