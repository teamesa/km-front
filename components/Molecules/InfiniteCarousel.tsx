import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import theme from 'styles/theme';

export default function InfiniteCarousel({
  imgUrlArr,
  width,
  height,
}: {
  imgUrlArr: string[];
  width: string;
  height: string;
}) {
  const rootRef = useRef<any>();
  const [nowIndex, setNowIndex] = useState<number>(-999);

  const handleIndicator = (index: number) => {
    setNowIndex(index);
  };

  const getPage = () => {
    if (1 <= nowIndex && nowIndex <= imgUrlArr.length) {
      return nowIndex;
    } else if (nowIndex === -999) {
      return 1;
    } else if (nowIndex > imgUrlArr.length) {
      return 1;
    } else if (nowIndex === 0) {
      return imgUrlArr.length;
    }
  };

  useEffect(() => {
    if (rootRef === undefined) {
      console.log('can not find root ref');
      return;
    }

    const width = rootRef.current.scrollWidth / (imgUrlArr.length + 2);
    const timeOutList: any = [];

    if (nowIndex === -999) {
      setTimeout(() => {
        rootRef.current.style.scrollBehavior = 'unset';
        rootRef.current.scrollTo(width, 0);
      }, 50);
    } else if (nowIndex === imgUrlArr.length + 1) {
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
          rootRef.current.scrollTo(imgUrlArr.length * width, 0);
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
  }, [nowIndex, rootRef, imgUrlArr]);

  return (
    <Box position="relative">
      {imgUrlArr.length > 1 ? (
        <FlexBox
          width="38px"
          height="22px"
          position="absolute"
          alignItems="center"
          justifyContent="space-around"
          fontSize="14px"
          lineHeight="0.91px"
          letterSpacing="0.11px"
          bottom="0px"
          right="0px"
          zIndex="100"
          backgroundColor="black"
          opacity="0.4"
        >
          <Box
            width="fit-content"
            height="fit-content"
            marginRight="3.2px"
            color={theme.colors.white}
          >
            <>{getPage()}</>{' '}
          </Box>
          <Box
            width="fit-content"
            height="fit-content"
            color={theme.colors.gray99}
          >
            {' '}
            / {imgUrlArr.length}
          </Box>
        </FlexBox>
      ) : null}
      <Box
        width={width}
        height={height}
        overflowY="hidden"
        overflowX={imgUrlArr.length < 2 ? 'hidden' : 'scroll'}
        css={css`
          scroll-behavior: unset;
          scroll-snap-type: x mandatory;
        `}
        ref={rootRef}
      >
        <FlexBox height="inherit" width="fit-content" flexDirection="row">
          <CarouselItem
            itemOrder={-1}
            imgUrl={imgUrlArr[imgUrlArr.length - 1]}
            rootRef={rootRef}
            handleIndicator={handleIndicator}
            width={width}
            height={height}
          />
          {imgUrlArr.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl}
              rootRef={rootRef}
              handleIndicator={handleIndicator}
              width={width}
              height={height}
            />
          ))}
          <CarouselItem
            itemOrder={imgUrlArr.length}
            imgUrl={imgUrlArr[0]}
            rootRef={rootRef}
            handleIndicator={handleIndicator}
            width={width}
            height={height}
          />
        </FlexBox>
      </Box>
    </Box>
  );
}
