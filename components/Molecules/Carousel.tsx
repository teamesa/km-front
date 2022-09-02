import { css } from '@emotion/react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function Carousel({
  itemsPerSlide,
}: // children,
{
  itemsPerSlide: number;
  // children: any;
}) {
  const itemsRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);

  // 현재 이미지 인덱스 값. 첫시작 : 1
  const [numberOfIndicators, setNumberOfItems] = useState(1);
  // 범위 계산하기

  let indexScrollPositionArr: number[] = [];

  const calculateIndicatorDimensions = useCallback(() => {
    // const childrenCount = React.Children.count(children);
    const itemWidth = Math.ceil(itemsRef.current.offsetWidth / itemsPerSlide);

    let indexScrollPosition = 0;

    for (let i = 0; i < itemsPerSlide; i++) {
      indexScrollPositionArr.push(indexScrollPosition);
      indexScrollPosition += itemWidth;
    }
    // if (itemsRef) {
    //   for (const item of itemsRef.current.children) {
    // item.style.minWidth =
    //   Math.ceil(itemsRef.current.offsetWidth / itemsPerSlide) -
    //   itemGap +
    //   'px';
    // item.style.marginRight = itemGap + 'px';
    console.log(indexScrollPositionArr);
    setNumberOfItems(numberOfIndicators);
  }, [indexScrollPositionArr, itemsPerSlide, numberOfIndicators]);

  // 화면 리사이즈되면 width 이런거 다시 계산
  useEffect(() => {
    window.addEventListener('resize', calculateIndicatorDimensions);
    return () => {
      window.removeEventListener('resize', calculateIndicatorDimensions);
    };
  }, [calculateIndicatorDimensions]);

  useEffect(() => {
    calculateIndicatorDimensions();
  }, [calculateIndicatorDimensions]);

  // useEffect(() => {
  //   itemsRef.current.addEventListener('transitioned', handleIndicator);
  //   return () => {
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     itemsRef.current.addEventListener('transitioned', handleIndicator);
  //   };
  // }, []);

  // scroll 이벤트 멈췄을때 scrollTop 이 어디 범위(인덱스에) 있는지 판단해서
  // 인디케이터 useState 하기.

  const handleIndicator = () => {
    // console.log(Math.ceil(scrollRef.current.scrollLeft));
    const index = indexScrollPositionArr.indexOf(
      Math.ceil(scrollRef.current.scrollLeft),
    );
    if (index + 1 > 0) {
      setNumberOfItems(index + 1);
    }
  };

  return (
    <Box position="relative">
      {/* 인디케이터 */}
      <Box
        width="inherit"
        height="fit-content"
        position="absolute"
        fontSize="14px"
        lineHeight="0.91px"
        textAlign="right"
        letterSpacing="0.11px"
        bottom="15px"
        right="15px"
        zIndex="100"
        color={theme.colors.white}
      >
        {numberOfIndicators} / {itemsPerSlide}
      </Box>
      <Box
        width="345px"
        height="345px"
        overflowX="scroll"
        onScroll={handleIndicator}
        css={css`
          scroll-snap-type: x mandatory;
        `}
        ref={scrollRef}
      >
        {/* 이미지 아이템 들어가는 곳 */}
        <FlexBox
          width="1035px"
          height="345px"
          flexDirection="row"
          ref={itemsRef}
        >
          <Box
            css={css`
              scroll-snap-align: start;
            `}
          >
            <Image
              src={
                'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
              }
              alt="image"
              width="345px"
              height="345px"
            />
          </Box>
          <Box
            css={css`
              scroll-snap-align: start;
            `}
          >
            <Image
              src={
                'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
              }
              alt="image"
              width="345px"
              height="345px"
            />
          </Box>
          <Box
            css={css`
              scroll-snap-align: start;
            `}
          >
            <Image
              src={
                'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
              }
              alt="image"
              width="345px"
              height="345px"
            />
          </Box>
        </FlexBox>
      </Box>
    </Box>
  );
}
