import { css } from '@emotion/react';
import { useEffect, useRef, useState, useTransition } from 'react';

import { Plus } from 'assets/archive/Plus';
import { FlexBox, Box, Button } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import InfiniteCarouselTitle from 'components/Organisms/Home/Module/KeyVisual/InfinitiCarouselTitle';
import theme from 'styles/theme';
import { now } from 'moment';

export default function InfiniteCarousel({
  imgUrlList,
  width,
  height,
  plusFunction,
}: {
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
  const rootRef = useRef<any>();
  const carouselItemWidthRef = useRef<number>(0);
  const [nowIndex, setNowIndex] = useState<number>(-999);
  const [inView, setInView] = useState<boolean>(false);
  const [settingCarouselItemsCount, setSettingCarouselItemsCount] = useState<number>(0);
  const [cssTransition, setCssTransition] = useState<string>('transform 1s 0s');
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // 인디케이터 숫자 
  const getPage = () => {
   if (nowIndex >= 1 && nowIndex < imgUrlList.length + 1) {
      return nowIndex;
    }else if (nowIndex === -999){
      return imgUrlList.length;
    }
  }

  const loop = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
      animationFrameRef.current = requestAnimationFrame(loop);
    }else {
            // 지연 시간
      const elapsed = timestamp - startTimeRef.current;

      const handleCarousel = (updatedIndex: number, cssTransition: string) =>{
        setCssTransition(cssTransition);
        setNowIndex(updatedIndex);
        startTimeRef.current = timestamp;
      }
      
      if (elapsed > 5000 && nowIndex > 0 && nowIndex < settingCarouselItemsCount - 1) {  
        handleCarousel(nowIndex + 1, 'transform 1s 0s');
      } else if (elapsed > 0) {
        if (nowIndex === 0){
          handleCarousel(nowIndex + 1, 'transform 1s 0s');
        } else if (nowIndex === settingCarouselItemsCount -1){
          handleCarousel(0, 'none');
        } else if (nowIndex === -999){
          handleCarousel(1, 'none');
        }
      }
      animationFrameRef.current = requestAnimationFrame(loop);
    };

  }

// 키비주얼 화면에 노출 감지 Observer 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    return () => {
      if (rootRef.current) {
        observer.unobserve(rootRef.current);
      }
  }; }, [rootRef]); 
  
// 첫렌더링 시, 세팅된 아이템 갯수 구하기 & 키비주얼 노출 시 
  useEffect(() => {
    if (rootRef === undefined) {
      console.log('can not find root ref');
      return;
    }else {
      setSettingCarouselItemsCount(imgUrlList.length + 2);
      carouselItemWidthRef.current = (rootRef.current.scrollWidth / (settingCarouselItemsCount));
    }

  }, [rootRef, imgUrlList]);

  useEffect(()=>{
    if (inView) {
      animationFrameRef.current = requestAnimationFrame(loop);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  },[inView,nowIndex])

  return (
    <Box position="relative">
      <Box
        width={width}
        height={height}
        maxWidth={theme.view.webView}
        overflowY="hidden"
        overflowX="scroll"
        ref={rootRef}
      >
        <FlexBox height="inherit" width="fit-content" flexDirection="row"
          css={css`
              transform: translateX(-${nowIndex * carouselItemWidthRef.current}px);
              transition: ${cssTransition};
          `}  
        >
          <CarouselItem
            itemOrder={-1}
            imgUrl={imgUrlList[imgUrlList.length - 1].keyVisualPhotoUrl}
            rootRef={rootRef}
            width={width}
            height={height}
            dimOption={true}
            priority={inView}
          />
          {imgUrlList.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl.keyVisualPhotoUrl}
              width={width}
              height={height}
              dimOption={true}
              priority={inView}
            />
          ))}
          <CarouselItem
            itemOrder={imgUrlList.length}
            imgUrl={imgUrlList[0].keyVisualPhotoUrl}
            rootRef={rootRef}
            width={width}
            height={height}
            dimOption={true}
            priority={inView}
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
          .filter((_, index) => index === nowIndex - 1)}
      </Box>
    </Box>
  );
}

