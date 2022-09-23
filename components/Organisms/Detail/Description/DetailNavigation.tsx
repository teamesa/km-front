import { RefObject } from 'react';
import { useRecoilValue } from 'recoil';

import { Box } from 'components/Atoms';
import { DetailNavigationState } from 'states/detail-navigation';
import theme from 'styles/theme';

export function DetailNavigation({
  deatailMetaInfo,
  archiveRef,
  introduceRef,
}: {
  deatailMetaInfo: {
    title: string;
  }[];
  archiveRef: RefObject<HTMLDivElement>;
  introduceRef: RefObject<HTMLDivElement>;
}) {
  const isIntroduce = useRecoilValue(DetailNavigationState);
  const clicked = deatailMetaInfo.length > 1 ? (isIntroduce ? 0 : 1) : 0;

  const scrollToTarget = (title: string) => {
    if (title === '소개') {
      introduceRef?.current?.scrollIntoView();
    } else if (title === '아카이브') {
      archiveRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      position="sticky"
      top="calc(45px + env(safe-area-inset-top))"
      background={theme.colors.white}
      zIndex={2}
    >
      <Box height="45px" overflow="auto" display="flex" zIndex={2}>
        {deatailMetaInfo.map(({ title }, index) => (
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
            color={clicked === index ? theme.colors.black : theme.colors.gray99}
            onClick={() => scrollToTarget(title)}
          >
            {title}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
