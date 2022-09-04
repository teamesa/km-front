import { css } from '@emotion/react';

import { Box } from 'components/Atoms';
import SwipeItemKeyword from 'components/Organisms/Home/Module/SwipeItem/SwipeItemKeyword';
import theme from 'styles/theme';

export default function SwipeItemInfo({
  title,
  content,
  keywords,
}: {
  title: string;
  content: string;
  keywords: string[];
}) {
  return (
    <Box paddingTop="20px" width="300px" paddingX="15px">
      <Box
        fontSize="19px"
        fontWeight={500}
        lineHeight={1.37}
        textAlign="left"
        css={css`
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `}
        color={theme.colors.black}
      >
        {title}
      </Box>
      <Box
        marginTop="10px"
        fontSize="13px"
        lineHeight={1.54}
        textAlign="left"
        color={theme.colors.black}
        height="98px"
        css={css`
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        `}
      >
        {content}
      </Box>
      <Box marginTop="20px" display="flex">
        {keywords.map((keyword) => (
          <SwipeItemKeyword key={keyword} keyword={keyword} />
        ))}
      </Box>
    </Box>
  );
}
