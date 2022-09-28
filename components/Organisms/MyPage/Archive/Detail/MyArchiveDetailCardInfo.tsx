import { css } from '@emotion/react';

import StarRating from 'assets/list/StarRating';
import { Pointer } from 'assets/mypage';
import { Box, FlexBox, Span } from 'components/Atoms';
import { MyArchiveDetailInfoProps } from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailCardInfo(
  content: MyArchiveDetailInfoProps,
) {
  return (
    <FlexBox>
      <Box width="172.5px" height="80px" background="#000" padding="20px 15px">
        <FlexBox alignItems="center">
          <Box display={content.food ? 'visible' : 'none'}>
            <Pointer color="#fff" />
          </Box>
          <Span
            marginLeft="10px"
            fontSize="12px"
            lineHeight="18px"
            display="-webkit-box"
            overflow="hidden"
            color="#fff"
            css={css`
              text-overflow: ellipsis;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            `}
          >
            {content.food}
          </Span>
        </FlexBox>
        <FlexBox alignItems="center">
          <Box display={content.cafe ? 'visible' : 'none'}>
            <Pointer color="#fff" />
          </Box>
          <Box
            marginLeft="10px"
            fontSize="12px"
            lineHeight="18px"
            overflow="hidden"
            display="-webkit-box"
            color="#fff"
            css={css`
              text-overflow: ellipsis;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            `}
          >
            {content.cafe}
          </Box>
        </FlexBox>
      </Box>
      <FlexBox
        width="172.5px"
        height="80px"
        justifyContent="center"
        alignItems="center"
      >
        <StarRating
          width="21.6px"
          height="20.6px"
          viewBox="0 0 10 10"
          fill={theme.colors.orange}
        />
        <StarRating
          width="21.6px"
          height="20.6px"
          viewBox="0 0 10 10"
          fill={theme.colors.orange}
        />
        <StarRating
          width="21.6px"
          height="20.6px"
          viewBox="0 0 10 10"
          fill={theme.colors.orange}
        />
        <StarRating
          width="21.6px"
          height="20.6px"
          viewBox="0 0 10 10"
          fill={theme.colors.orange}
        />
        <StarRating
          width="21.6px"
          height="20.6px"
          viewBox="0 0 10 10"
          fill={theme.colors.orange}
        />
      </FlexBox>
    </FlexBox>
  );
}
