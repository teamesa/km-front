import { css } from '@emotion/react';

import StarRating from 'assets/list/StarRating';
import { Pointer } from 'assets/mypage';
import { Box, FlexBox, Span } from 'components/Atoms';
import NoItemBox from 'components/Molecules/NoItemBox';
import { MyArchiveDetailInfoProps } from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailCardInfo(
  contents: MyArchiveDetailInfoProps,
) {
  return (
    <FlexBox borderTop="solid 1px" borderTopColor={theme.colors.gray99}>
      {/* 다녀온곳 */}
      <Box width="172.5px" height="80px">
        {contents.cafe === '' && contents.food === '' ? (
          <NoItemBox width="inherit" height="inherit" text="다녀온 곳" />
        ) : (
          <FlexBox
            width="inherit"
            height="inherit"
            padding="20px 15px"
            background={theme.colors.black}
            flexDirection="column"
            justifyContent="center"
          >
            <Box display={contents.food ? 'flex' : 'none'} alignItems="center">
              <Box display={contents.food ? 'block' : 'none'}>
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
                {contents.food}
              </Span>
            </Box>
            <Box display={contents.cafe ? 'flex' : 'none'} alignItems="center">
              <Box display={contents.cafe ? 'block' : 'none'}>
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
                {contents.cafe}
              </Box>
            </Box>
          </FlexBox>
        )}
      </Box>
      {/* 별점 */}
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
