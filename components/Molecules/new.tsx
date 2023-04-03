import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import CarouselItem from './CarouselItem';
import { Box, Button, FlexBox } from 'components/Atoms';
import theme from 'styles/theme';
import { Plus } from 'assets/archive/Plus';
import InfiniteCarouselTitle from 'components/Organisms/Home/Module/KeyVisual/InfinitiCarouselTitle';

export default function InfiniteCarousel({ imgUrlList, width, height, plusFunction }: {
  imgUrlList: {
    keyVisualPhotoUrl: string;
    upperTitle: string;
    lowerTitle: string;
    link?: string;
  }[];
  width: string;
  height: string;
  plusFunction: () => {};
}) {
  const carouselRootRef = useRef<any>(); // IntersectionObserver의 root가 붙은 캐러셀 Ref
  const [nowIndex, setNowIndex] = useState<number>(-999);
  
  const handleIndicator = (index: number) => {    setNowIndex(index);  };
  
  const getPage = () => {    if (1 <= nowIndex && nowIndex <= imgUrlList.length) {
      return nowIndex;
    } else if (nowIndex === -999) {
      return 1;
    } else if (nowIndex > imgUrlList.length) {
      return 1;
    } else if (nowIndex === 0) {
      return imgUrlList.length;
    }
  };
  
  useEffect(() => {
    let lastTimeStamp = performance.now(); // For measuring the frame rate
    let accumulatedTime = 0;
    let requestId: number;
    let drawing = false;
    const FPS = 60.0;
    const FRAME_DURATION = 1000.0 / FPS;
    const nowItemWidth = carouselRootRef.current.scrollWidth / (imgUrlList.length + 2);

    const animate = (timeStamp: number) => {
      accumulatedTime += timeStamp - lastTimeStamp;
      lastTimeStamp = timeStamp;
      if (accumulatedTime > FRAME_DURATION) {
        accumulatedTime = 0;
        carouselRootRef.current.style.scrollBehavior = 'smooth';        carouselRootRef.current.scrollTo((nowIndex + 1) * nowItemWidth, 0);
      }
      requestId = requestAnimationFrame(animate);
    };

    const startDrawing = () => {
      if (!drawing) {
        requestId = requestAnimationFrame(animate);
        drawing = true;
      }
    };

    const stopDrawing = () => {
      if (drawing) {
        cancelAnimationFrame(requestId);
        drawing = false;
      }
    };
 
    const startCarousel = () => {
      requestId = requestAnimationFrame(() =>
        carouselRootRef.current.scrollTo(nowItemWidth, 0),
      );
      if (nowIndex === -999) setNowIndex(1);
    };

    startCarousel();
    carouselRootRef.current.addEventListener('mouseenter', stopDrawing);
    carouselRootRef.current.addEventListener('mouseleave', startDrawing);    return () => {      stopDrawing(); // Stop the infinite carousel animation
      carouselRootRef.current.removeEventListener('mouseenter', stopDrawing);
      carouselRootRef.current.removeEventListener('mouseleave', startDrawing);
    };
  }, [carouselRootRef, imgUrlList, nowIndex]);

  const newLocal = "hidden";
  return (
    <Box position="relative">
      <Box
        width={width}
        height={height}
        maxWidth={theme.view.webView}
        overflowY={newLocal}
        overflowX="scroll"
        css={css`
          scroll-behavior: unset;
          scroll-snap-type: x mandatory;
        `}
        ref={carouselRootRef}
      >
        <FlexBox height="inherit" width="fit-content" flexDirection="row">
          <CarouselItem
            itemOrder={-1}
            imgUrl={imgUrlList[imgUrlList.length - 1].keyVisualPhotoUrl}
            rootRef={carouselRootRef}
            handleIndicator={handleIndicator}
            width={width}
            height={height}
            dimOption={true}
          />
          {imgUrlList.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl.keyVisualPhotoUrl}
              rootRef={carouselRootRef}
              handleIndicator={handleIndicator}
              width={width}
              height={height}
              dimOption={true}
            />
          ))}
          <CarouselItem
            itemOrder={imgUrlList.length}
            imgUrl={imgUrlList[0].keyVisualPhotoUrl}
            rootRef={carouselRootRef}
            handleIndicator={handleIndicator}
            width={width}
            height={height}
            dimOption={true}
          />
        </FlexBox>
      </Box>
      <Button
        borderRadius="12px"
        backgroundColor={theme.colors.black}
        position="absolute"
        bottom="15px"
        right="15px"
        fontSize="11px"
        fontWeight={500}
        lineHeight={0.91}
        opacity={0.7}
        padding={'5px 10px'}
        zIndex={300}
        color={theme.colors.white}
        onClick={plusFunction}
      >
        <Box display="inline-block" color={theme.colors.white}>
          {getPage()}
        </Box>
        <Box
          display="inline-block"
          opacity={0.7}
          color={theme.colors.white}
          marginX="3px"
        >
          /
        </Box>
        <Box
          display="inline-block"
          opacity={0.7}
          color={theme.colors.white}
          marginRight="8px"
        >
          {imgUrlList.length}
        </Box>
        <Box display="inline-block" opacity={1} position="relative" top="0.5px">
          <Plus width="9px" height="9px" />
        </Box>
      </Button>
      <Box position="absolute" bottom="60px">
        {imgUrlList
          .map(({ upperTitle, lowerTitle, link }, index) => (
            <InfiniteCarouselTitle
              key={`InfiniteCarouselTitle-${index}`}
              upperTitle={upperTitle}
              lowerTitle={lowerTitle}
              link={link}
            />
          ))
          .filter((_, index) => index + 1 === nowIndex)}
      </Box>
    </Box>
  );
}
