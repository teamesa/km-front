import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import { Plus } from 'assets/archive/Plus';
import { FlexBox, Box } from 'components/Atoms';
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
  const [nowIndex, setNowIndex] = useState<number>(-999);

  const handleIndicator = (index: number) => {
    setNowIndex(index);
  };

  const getPage = () => {
    if (1 <= nowIndex && nowIndex <= imgUrlList.length) {
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
    if (rootRef === undefined) {
      console.log('can not find root ref');
      return;
    }

    const width = rootRef.current.scrollWidth / (imgUrlList.length + 2);
    const timeOutList: any = [];

    if (nowIndex === -999) {
      setTimeout(() => {
        rootRef.current.style.scrollBehavior = 'unset';
        rootRef.current.scrollTo(width, 0);
      }, 50);
    } else if (nowIndex === imgUrlList.length + 1) {
      timeOutList.push(
        setTimeout(() => {
          rootRef.current.style.scrollBehavior = 'unset';
          rootRef.current.scrollTo(width, 0);
        }, 300),
      );
    } else if (nowIndex === 0) {
      timeOutList.push(
        setTimeout(() => {
          rootRef.current.style.scrollBehavior = 'unset';
          rootRef.current.scrollTo(imgUrlList.length * width, 0);
        }, 300),
      );
    } else {
      timeOutList.push(
        setTimeout(() => {
          rootRef.current.style.scrollBehavior = 'smooth';
          rootRef.current.scrollTo((nowIndex + 1) * width, 0);
        }, 5000),
      );
    }
    return () => {
      timeOutList.forEach((timeOutId: NodeJS.Timeout | undefined) =>
        clearTimeout(timeOutId),
      );
    };
  }, [nowIndex, rootRef, imgUrlList]);

  return (
    <Box position="relative">
      <Box
        width={width}
        height={height}
        maxWidth={theme.view.webView}
        overflowY="hidden"
        overflowX="scroll"
        css={css`
          scroll-behavior: unset;
          scroll-snap-type: x mandatory;
        `}
        ref={rootRef}
      >
        <FlexBox height="inherit" width="fit-content" flexDirection="row">
          <CarouselItem
            itemOrder={-1}
            imgUrl={imgUrlList[imgUrlList.length - 1].keyVisualPhotoUrl}
            rootRef={rootRef}
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
              rootRef={rootRef}
              handleIndicator={handleIndicator}
              width={width}
              height={height}
              dimOption={true}
            />
          ))}
          <CarouselItem
            itemOrder={imgUrlList.length}
            imgUrl={imgUrlList[0].keyVisualPhotoUrl}
            rootRef={rootRef}
            handleIndicator={handleIndicator}
            width={width}
            height={height}
            dimOption={true}
          />
        </FlexBox>
      </Box>
      <Box
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
        <Box
          display="inline-block"
          opacity={1}
          position="relative"
          top="0.5px"
          onClick={plusFunction}
        >
          <Plus width="9px" height="9px" />
        </Box>
      </Box>
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
