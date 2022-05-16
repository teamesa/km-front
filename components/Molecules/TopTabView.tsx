import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Box } from 'components/Atoms';
import Archive from 'components/Organisms/Detail/Description/Archive';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import theme from 'styles/theme';

interface TopTabViewProps {
  data: {
    /** 탭 상단 제목 */
    title: string;
    /** 내용에 들어가는 children (JSX) */
    children?: JSX.Element | JSX.Element[];
    contents: any;
  }[];
}

export default function TopTabView({ data }: TopTabViewProps) {
  const [index, setIndex] = useState(0);
  const [headerSize, setHeaderSize] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current?.offsetHeight) {
      setHeaderSize(ref.current.offsetHeight + 45);
    }
  }, [ref]);

  return (
    <>
      <Box ref={ref} padding="0 15px" background={theme.colors.white}>
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
        index={index}
        onChangeIndex={(_index) => {
          setIndex(_index);
        }}
        style={{
          background: `${theme.colors.white}`,
        }}
        containerStyle={{
          height: `calc(100vh - ${headerSize}px`,
          width: '100%',
        }}
      >
        <div style={Object.assign({})}>
          <Introduce data={data[0].contents} />
        </div>
        <div style={Object.assign({})}>
          <Archive data={data[1].contents} />
        </div>
      </SwipeableViews>
    </>
  );
}
