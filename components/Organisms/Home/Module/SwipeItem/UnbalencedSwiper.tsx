import { css } from '@emotion/react';

import { Box, FlexBox } from 'components/Atoms';
import MainSwipeImage from 'components/Organisms/Home/Module/SwipeItem/MainSwipeImage';
import SubSwipeImage from 'components/Organisms/Home/Module/SwipeItem/SubSwipeImage';
import { useRef, useState } from 'react';
import theme from 'styles/theme';

export default function UnbalencedSwiper({
  thumbnailPhotoUrl,
  photoUrls,
}: {
  thumbnailPhotoUrl: string;
  photoUrls: string[];
}) {
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
    sliderRef.current.style.cursor = '-webkit-grabbing';
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
    sliderRef.current.scrollLeft = scrollLeft - walk * 1;
    sliderRef.current.style.cursor = '-webkit-grabbing';
    sliderRef.current.style.scrollSnapType = 'none';
  };

  return (
    <Box
      marginTop="60px"
      width="100vw"
      maxWidth={theme.view.webView}
      height="420px"
      overflowY="hidden"
      overflowX="scroll"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      css={css`
        cursor: -webkit-grab;
        // scroll-snap-type: x mandatory;
      `}
    >
      <FlexBox width="max-content" flexDirection="row">
        <MainSwipeImage src={thumbnailPhotoUrl} />
        {photoUrls.map((subUrl, index) => (
          <SubSwipeImage
            src={subUrl}
            key={`subSwipeItem-${subUrl.substr(
              subUrl.length - 5,
              subUrl.length,
            )}-${index}`}
          />
        ))}
      </FlexBox>
    </Box>
  );
}
