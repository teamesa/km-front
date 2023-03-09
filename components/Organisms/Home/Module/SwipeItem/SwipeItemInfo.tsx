import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Box, FlexBox } from 'components/Atoms';
import SwipeItemKeyword from 'components/Organisms/Home/Module/SwipeItem/SwipeItemKeyword';
import theme from 'styles/theme';

export default function SwipeItemInfo({
  title: { text: titleText, link: titleLink },
  content: { text: contentText, link: contentLink },
  keywords,
}: {
  title: {
    text: string;
    link: string;
  };
  content: {
    text: string;
    link: string;
  };
  keywords: string[];
}) {
  const router = useRouter();
  const filteredContent = contentText.replace(/<[^>]*>?/g, '');
  return (
    <Box paddingTop="20px" width="300px" paddingX="15px">
      <Box
        aria-label="아이템 타이틀 링크"
        role="link"
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
          cursor: pointer;
        `}
        color={theme.colors.black}
        onClick={() => {
          router.push(titleLink);
        }}
      >
        {titleText}
      </Box>
      <Box
        marginTop="10px"
        fontSize="13px"
        lineHeight={1.54}
        textAlign="left"
        color={theme.colors.black}
        css={css`
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        `}
        onClick={() => {
          router.push(contentLink);
        }}
      >
        {filteredContent}
      </Box>
      <FlexBox marginTop="20px">
        {keywords.map((keyword) => (
          <SwipeItemKeyword key={keyword} keyword={keyword} />
        ))}
      </FlexBox>
    </Box>
  );
}
