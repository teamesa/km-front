import { RefObject } from 'react';
import { useRecoilValue } from 'recoil';

import { Box, FlexBox } from 'components/Atoms';
import { DetailNavigationState } from 'states/detail-navigation';
import theme from 'styles/theme';
import { css } from '@emotion/react';

export function DescriptionNavigation({
  deatailMetaInfo,
  archiveRef,
  introduceRef,
}: {
  deatailMetaInfo: any[];
  archiveRef: RefObject<HTMLDivElement>;
  introduceRef: RefObject<HTMLDivElement>;
}) {
  const isIntroduce = useRecoilValue(DetailNavigationState);
  const clicked = deatailMetaInfo?.length > 1 ? (isIntroduce ? 0 : 1) : 0;

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
      top="calc(44px + env(safe-area-inset-top))"
      background={theme.colors.white}
      zIndex={2}
    >
      <FlexBox height="45px" overflow="auto" zIndex={2}>
        {deatailMetaInfo?.map(({ title }, index) => (
          <FlexBox
            aria-label={`${title} 탭 버튼`}
            key={index}
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
            color={clicked === index ? theme.colors.black : theme.colors.gray99}
            onClick={() => scrollToTarget(title)}
            css={css`
              cursor: pointer;
            `}
          >
            {title}
          </FlexBox>
        ))}
      </FlexBox>
    </Box>
  );
}
