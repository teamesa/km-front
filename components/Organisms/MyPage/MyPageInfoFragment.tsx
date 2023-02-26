import { css } from '@emotion/react';
import { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box, FlexBox } from 'components/Atoms';
import FloatingButton from 'components/Molecules/FloatingButton';
import BlankArchiveListSection from 'components/Organisms/MyPage/Archive/BlankArchiveListSection';
import ListSection from 'components/Organisms/MyPage/Archive/ListSection';
import ConfigurationFragment from 'components/Organisms/MyPage/ConfigurationFragment';
import { myArchiveListState } from 'states/myArchiveList';
import theme from 'styles/theme';

export default function MyPageInfoFragment() {
  const { state, contents } = useRecoilValueLoadable(myArchiveListState);
  const MyPageNavigatorMetaInfo = [
    { title: `${contents?.title ?? ''}` },
    { title: '설정' },
  ];
  const [isMyArchiveShowed, setMyArchiveShowedFlag] = useState<boolean>(true);
  const clicked = isMyArchiveShowed ? 0 : 1;

  const renderFragment = (index: number) => {
    if (index === 0) {
      setMyArchiveShowedFlag(true);
    } else {
      setMyArchiveShowedFlag(false);
    }
  };

  switch (state) {
    case 'hasValue':
      return (
        <>
          <Box
            position="sticky"
            top="calc(45px + env(safe-area-inset-top))"
            background={theme.colors.white}
            zIndex={2}
          >
            <FlexBox
              height="45px"
              overflow="auto"
              zIndex={2}
              css={css`
                cursor: pointer;
              `}
            >
              {MyPageNavigatorMetaInfo.map(({ title }, index) => (
                <FlexBox
                  key={title}
                  flex="1"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="17px"
                  fontWeight={500}
                  borderBottom={
                    clicked === index
                      ? `2px solid ${theme.colors.black}`
                      : `2px solid ${theme.colors.grayDD}`
                  }
                  color={
                    clicked === index ? theme.colors.black : theme.colors.gray99
                  }
                  onClick={() => renderFragment(index)}
                >
                  {title}
                </FlexBox>
              ))}
            </FlexBox>
          </Box>
          {isMyArchiveShowed ? (
            <>
              {contents?.contents?.length === 0 ? (
                <>
                  <BlankArchiveListSection />
                  <FloatingButton />
                </>
              ) : (
                <>
                  <ListSection contents={contents} />
                  <FloatingButton />
                </>
              )}
            </>
          ) : (
            <ConfigurationFragment />
          )}
        </>
      );

    case 'loading':
      return <div>loading</div>;
    case 'hasError':
      throw contents;
  }
}
