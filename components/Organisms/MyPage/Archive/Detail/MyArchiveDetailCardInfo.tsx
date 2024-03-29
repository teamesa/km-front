import { css } from '@emotion/react';

import { Pointer } from 'assets/mypage';
import { Box, FlexBox, Span } from 'components/Atoms';
import NoItemBox from 'components/Molecules/NoItemBox';
import { MyArchiveDetailInfoProps } from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailCardInfo(
  contents: MyArchiveDetailInfoProps,
) {
  const makeAvgStarRating = () => {
    const rating = contents?.starRating * 20;
    return `${rating + 1.5}%`;
  };

  const Start = () => {
    return (
      <Box fontSize="23px" margin="0 3.5px">
        ★
      </Box>
    );
  };

  const StartRatingImage = () => {
    return (
      <Box
        color={theme.colors.orange}
        position="relative"
        width="max-content"
        opacity="0.3px"
        css={css`
          unicode-bidi: bidi-override;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 0.3px;
          -webkit-text-stroke-color: #000;
        `}
      >
        <Box
          display="flex"
          flexDirection="row"
          position="absolute"
          zIndex="1"
          overflow="hidden"
          css={css`
            -webkit-text-fill-color: #ff6200;
            -webkit-text-stroke-color: #ff6200;
          `}
          width={makeAvgStarRating()}
        >
          <Start />
          <Start />
          <Start />
          <Start />
          <Start />
        </Box>
        <Box display="flex" flexDirection="row" zIndex="0" padding="0">
          <Start />
          <Start />
          <Start />
          <Start />
          <Start />
        </Box>
      </Box>
    );
  };

  return (
    <FlexBox borderTop="solid 1px" borderTopColor={theme.colors.gray99}>
      {/* 다녀온곳 */}
      <Box width="172.5px" height="80px">
        {contents?.cafe === '' && contents?.food === '' ? (
          <NoItemBox
            width="inherit"
            height="inherit"
            text="다녀온 곳"
            textColor={theme.colors.gray77}
            backgroundColor={theme.colors.white}
          />
        ) : (
          <FlexBox
            width="inherit"
            height="inherit"
            padding="20px 15px"
            background={theme.colors.black}
            flexDirection="column"
            justifyContent="center"
          >
            {contents?.food ? (
              <Box display="flex" alignItems="center">
                <Box display="block">
                  <Pointer color={theme.colors.white} />
                </Box>
                <Span
                  marginLeft="10px"
                  fontSize="12px"
                  lineHeight="18px"
                  display="-webkit-box"
                  overflow="hidden"
                  color={theme.colors.white}
                  css={css`
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                  `}
                >
                  {contents?.food}
                </Span>
              </Box>
            ) : null}
            {contents?.cafe ? (
              <Box display="flex" alignItems="center">
                <Box display="block">
                  <Pointer color={theme.colors.white} />
                </Box>
                <Span
                  marginLeft="10px"
                  fontSize="12px"
                  lineHeight="18px"
                  display="-webkit-box"
                  overflow="hidden"
                  color={theme.colors.white}
                  css={css`
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                  `}
                >
                  {contents?.cafe}
                </Span>
              </Box>
            ) : null}
          </FlexBox>
        )}
      </Box>
      <FlexBox
        width="172.5px"
        height="80px"
        justifyContent="center"
        alignItems="center"
        borderLeft="solid 1px"
        borderColor={theme.colors.gray99}
      >
        <Box
          color={theme.colors.black}
          position="relative"
          width="max-content"
          css={css`
            unicode-bidi: bidi-override;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1.3px;
            -webkit-text-stroke-color: orange;
          `}
        >
          <StartRatingImage />
        </Box>
      </FlexBox>
    </FlexBox>
  );
}
