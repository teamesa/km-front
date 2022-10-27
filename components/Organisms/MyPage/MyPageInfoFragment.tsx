import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { Box } from 'components/Atoms';
import ListSection from 'components/Organisms/MyPage/Archive/ListSection';
import ConfigurationFragment from 'components/Organisms/MyPage/ConfigurationFragment';
import { useResetMyArchiveListStateFunction } from 'states/myArchiveList';
import { myArchiveListState } from 'states/myArchiveList';
import theme from 'styles/theme';

export default function MyPageInfoFragment() {
  const { state, contents } = useRecoilValueLoadable(myArchiveListState);
  const MyPageNavigatorMetaInfo = [
    { title: `${contents?.title ?? ''}` },
    { title: '설정' },
  ];
  const [isMyArchiveShowed, setMyArhiveShowedFlag] = useState<boolean>(true);
  const clicked = isMyArchiveShowed ? 0 : 1;

  const renderFragment = (index: number) => {
    if (index === 0) {
      setMyArhiveShowedFlag(true);
    } else {
      setMyArhiveShowedFlag(false);
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
            <Box height="45px" overflow="auto" display="flex" zIndex={2}>
              {MyPageNavigatorMetaInfo.map(({ title }, index) => (
                <Box
                  key={title}
                  flex="1"
                  display="flex"
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
                </Box>
              ))}
            </Box>
          </Box>
          {isMyArchiveShowed ? (
            <ListSection contents={contents} />
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
