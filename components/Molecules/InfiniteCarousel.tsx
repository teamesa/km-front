import { css } from '@emotion/react';
import { useEffect, useRef, useState, PropsWithChildren } from 'react';

import { Plus } from 'assets/archive/Plus';
import { FlexBox, Box, Button } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import InfiniteCarouselTitle from 'components/Organisms/Home/Module/KeyVisual/InfinitiCarouselTitle';
import theme from 'styles/theme';

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

  // const handleIndicator = (index: number) => {
  //   setNowIndex(index);
  //   console.log(index)
  // };

  const getPage = () => {
    if (1 <= nowIndex && nowIndex <= imgUrlList.length) {
      return nowIndex;
    } else if (nowIndex === -999) {
      return 1;
    } else if (nowIndex > imgUrlList.length) {
      return 1;
    } 
    else if (nowIndex === 0) {
      return 1;
    }
  };

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

  useEffect(() => {
    
    if (rootRef === undefined) {
      console.log('can not find root ref');
      return;
    }else if(rootRef.current){
      console.log(rootRef.current.scrollWidth)
      carouselItemWidthRef.current = (rootRef.current.scrollWidth / (imgUrlList.length));
    }

    // //TTODO: 슬라이딩 애니메이션 transition 추가하기 
    // if (nowIndex === -999) {
    //   console.log(rootRef.current.firstChild.style)
    //   rootRef.current.firstChild.style.transition = 'transform: 0.5s;'
    // } else if (nowIndex === imgUrlList.length + 1) {
    //   rootRef.current.firstChild.style.transition = 'transform: 0.5s easy-in-out;'
    // } else if (nowIndex === 0) {
    //   rootRef.current.firstChild.style.transition = 'transform: 0.5s;'
    // } else {
    //   rootRef.current.firstChild.style.transition = 'transform: 0.5s;'
    // }

  }, [rootRef, imgUrlList]);

  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const nextSlide = () => {
    setNowIndex((prevIndex) => (prevIndex + 1) % imgUrlList.length);
  };

  const loop = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;

    if (elapsed > 2000) {
      console.log('elased')
      nextSlide();
      startTimeRef.current = timestamp;
    }

    animationFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

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
                transform: translateX(-${nowIndex * ( carouselItemWidthRef.current ?? 0)}px);
                transition: transform 1s 0s;
            `}
        >
          {/* <CarouselItem
            itemOrder={-1}
            imgUrl={imgUrlList[imgUrlList.length - 1].keyVisualPhotoUrl}
            rootRef={rootRef}
            // handleIndicator={handleIndicator}
            width={width}
            height={height}
            dimOption={true}
          /> */}
          {imgUrlList.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl.keyVisualPhotoUrl}
              // handleIndicator={handleIndicator}
              width={width}
              height={height}
              dimOption={true}
            />
          ))}
          {/* <CarouselItem
            itemOrder={imgUrlList.length}
            imgUrl={imgUrlList[0].keyVisualPhotoUrl}
            rootRef={rootRef}
            // handleIndicator={handleIndicator}
            width={width}
            height={height}
            dimOption={true}
          /> */}
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
          .filter((_, index) => index  === nowIndex + 1)}
      </Box>
    </Box>
  );
}

