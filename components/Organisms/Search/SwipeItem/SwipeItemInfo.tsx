import { css } from '@emotion/react';

import { Box, Tag } from 'components/Atoms';
import theme from 'styles/theme';

interface InfoPorps {
  title: {
    link: string;
    text: string;
  };
  additionalBadgeList: {
    text: string;
    typeBadge: boolean;
  }[];
}

export default function SwipeItemInfo({
  title,
  additionalBadgeList,
}: InfoPorps) {
  return (
    <Box position="relative" marginTop="10px">
      <Box position="absolute" top="-40px" left="5px" zIndex="1">
        {additionalBadgeList.map((badge, index) => (
          <Tag
            padding="0px 10px !important"
            fontSize="10px !important"
            background={theme.colors.grayEE}
            key={index}
          >
            {badge.text}
          </Tag>
        ))}
      </Box>
      <Box
        fontSize="13px"
        fontWeight="500"
        lineHeight="18px"
        overflow="hidden"
        css={css`
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        `}
      >
        {title.text}
      </Box>
    </Box>
  );
}
