import { css } from '@emotion/react';
import { useEffect, useRef, useState, useTransition } from 'react';

import { Plus } from 'assets/archive/Plus';
import { FlexBox, Box, Button } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import InfiniteCarouselTitle from 'components/Organisms/Home/Module/KeyVisual/InfinitiCarouselTitle';
import theme from 'styles/theme';
import React from 'react';
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
  const carouselItemWidthRef = useRef<number | null>(0);
  const [nowIndex, setNowIndex] = useState<number>(0);
  const [inView, setInView] = useState<boolean>(false);
  const [settingCarouselItemsCount, setSettingCarouselItemsCount] = useState<number>(0);
  const [cssTransition, setCssTransition] = useState<string>('');
  const [cssTranslateX, setCssTranslateX] = useState<number>(0);
  const [isPending, startTransition] = useTransition();
  const [slidingCount, setSlidingCount] = useState<number>(1);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // 숫자 인디케이터의 인덱스 핸들링
  const handleIndicator = (slidingCount: number, nowIndex: number) => {
    if (slidingCount === 0){ // 화면에 이미지 첫 장 보일때
      setNowIndex(1);
    }else if (slidingCount === settingCarouselItemsCount){
      setNowIndex((prevIndex) => (prevIndex));
    }else if (1 <= nowIndex && nowIndex <= imgUrlList.length){
      setNowIndex((prevIndex) => (prevIndex + 1));
    }
  }
    
  const handleCssTransition = (slidingCount: number) => {
    if(slidingCount === settingCarouselItemsCount -1) {
      setCssTransition('none');
    }else {
      setCssTransition('transform 1s 0s');
    }
  }

  const handleCssTranslateX = (nowIndex: number) =>{
    if (carouselItemWidthRef.current) setCssTranslateX(nowIndex * carouselItemWidthRef.current); 
  }

// 첫렌더링 시, 세팅된 아이템 갯수 구하기
  useEffect(() => {
    if (rootRef === undefined) {
      console.log('can not find root ref');
      return;
    }else {
      setSettingCarouselItemsCount(imgUrlList.length + 1);
      carouselItemWidthRef.current = (rootRef.current.scrollWidth / (settingCarouselItemsCount));
    }

  }, [rootRef, imgUrlList]);

//슬라이드 업데이트 
  const handleSlide = () => {
    setSlidingCount((prevCount) => (prevCount + 1));
    handleCssTransition(slidingCount);

    startTransition(()=>{
      handleCssTranslateX(nowIndex);
    });
    
    handleIndicator(slidingCount, nowIndex);
  };

  // 지연시간에 의한 반복 동작
  const loop = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    // 지연 시간
    const elapsed = timestamp - startTimeRef.current;

    if (elapsed > 2000) {
      handleSlide();
      startTimeRef.current = timestamp;
    }

    animationFrameRef.current = requestAnimationFrame(loop);
  };

  // 렌더링 시, requestAni- 동작 시작
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

    // keyVisual 부분 화면 벗어남 슬라이딩 멈추기 & 화면에 나오면 슬라이딩 시작 
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
      
      useEffect(() => {
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
    }, [inView]);

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
              transform: translateX(-${cssTranslateX}px);
              transition: ${cssTransition};
          `}  
        >
          {imgUrlList.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl.keyVisualPhotoUrl}
              width={width}
              height={height}
              dimOption={true}
            />
          ))}
          <CarouselItem
            itemOrder={imgUrlList.length}
            imgUrl={imgUrlList[0].keyVisualPhotoUrl}
            rootRef={rootRef}
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
          {nowIndex}
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
          .filter((_, index) => index  === nowIndex + 1)}
      </Box>
    </Box>
  );
}

