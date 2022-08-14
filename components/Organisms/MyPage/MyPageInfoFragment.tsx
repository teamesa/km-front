import { useState } from 'react';

import { Box } from 'components/Atoms';
import ListSection from 'components/Organisms/MyPage/Archive/ListSection';
import ConfigurationFragment from 'components/Organisms/MyPage/ConfigurationFragment';
import theme from 'styles/theme';

const MyPageNavigatorMetaInfo = [{ title: 'MY 아카이브' }, { title: '설정' }];

export default function MyPageInfoFragment() {
  const [isMyArchiveShowed, setMyArhiveShowedFlag] = useState<boolean>(true);
  const clicked = isMyArchiveShowed ? 0 : 1;

  const renderFragment = (title: string) => {
    if (title === 'MY 아카이브') {
      setMyArhiveShowedFlag(true);
    } else {
      setMyArhiveShowedFlag(false);
    }
  };
  return (
    <>
      <Box
        position="sticky"
        top="45px"
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
              onClick={() => renderFragment(title)}
            >
              {title}
            </Box>
          ))}
        </Box>
      </Box>
      {isMyArchiveShowed ? <ListSection /> : <ConfigurationFragment />}
    </>
  );
}
