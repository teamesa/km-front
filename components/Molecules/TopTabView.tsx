import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Folder } from 'assets/mypage';
import { Box } from 'components/Atoms';
import Archive from 'components/Organisms/Detail/Description/Archive';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import ListSection from 'components/Organisms/MyPage/Archive/ListSection';
import MyArchiveListFragment from 'components/Organisms/MyPage/Archive/MyArchiveListFragment';
import ConfigurationFragment from 'components/Organisms/MyPage/ConfigurationFragment';
import theme from 'styles/theme';

interface TopTabViewProps {
  data: {
    /** 탭 상단 제목 */
    title?: string | null;
    /** 내용에 들어가는 children (JSX) */
    children?: JSX.Element | JSX.Element[];
    contents?: any;
  }[];
  minusHeight?: number;
}

const ANCHOR_SECTION = 45 + 55;

export default function TopTabView({
  data,
  minusHeight = ANCHOR_SECTION,
}: TopTabViewProps) {
  const [index, setIndex] = useState(0);
  const [headerSize, setHeaderSize] = useState(0);
  const [checkHeight, setCheckHeight] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  let isMyArchiveTab = false;

  useEffect(() => {
    if (ref.current?.offsetHeight) {
      setHeaderSize(ref.current.offsetHeight + minusHeight);
    }
  }, [ref]);

  return (
    <>
      <Box
        ref={ref}
        position="sticky"
        top="45px"
        background={theme.colors.white}
        zIndex={2}
      >
        <Box height="45px" overflow="auto" display="flex" zIndex={2}>
          {data.map((item, _index) => (
            <Box
              key={_index}
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="17px"
              fontWeight={500}
              borderBottom={
                _index === index
                  ? `2px solid ${theme.colors.black}`
                  : `2px solid ${theme.colors.grayDD}`
              }
              css={css`
                transition: 0.35s;
              `}
              onClick={() => {
                setIndex(_index);
                setCheckHeight(true);
              }}
              color={
                _index === index
                  ? `${theme.colors.black}`
                  : `${theme.colors.gray99}`
              }
            >
              {item.title}
            </Box>
          ))}
        </Box>
      </Box>
      <SwipeableViews
        enableMouseEvents
        animateHeight={checkHeight}
        index={index}
        onChangeIndex={(_index) => {
          setIndex(_index);
        }}
        style={{
          background: `${theme.colors.white}`,
          // transition: 'none',
          width: '100%',
        }}
        springConfig={{
          duration: '0s',
          easeFunction: '0s',
          delay: '0s',
        }}
      >
        {data.map((item) =>
          item.title === '아카이브' ? (
            <Archive data={item.contents ?? ''} />
          ) : item.title === '소개' ? (
            <Introduce data={item.contents ?? ''} />
          ) : item.title === 'MY 아카이브' ? (
            <>
              {(isMyArchiveTab = true)}
              <ListSection />
            </>
          ) : item.title === '설정' ? (
            <ConfigurationFragment />
          ) : (
            <div></div>
          ),
        )}
      </SwipeableViews>
      <Box
        display="block"
        flex-wrap="nowrap"
        overflow="initial"
        position="fixed"
        bottom="80px"
        right="15px"
        css={
          index === 0 && isMyArchiveTab
            ? css`
                visibility: visible;
              `
            : css`
                visibility: hidden;
              `
        }
      >
        <Folder />
      </Box>
    </>
  );
}
