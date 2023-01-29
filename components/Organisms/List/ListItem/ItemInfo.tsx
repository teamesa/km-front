import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Box, Tag } from 'components/Atoms';
import type { PresentationBadge, PresentationTitle } from 'states/list';
import theme from 'styles/theme';

interface InfoProps {
  typeBadge: PresentationBadge;
  additionalBadgeList: [PresentationBadge];
  presentationTitle: PresentationTitle;
}

export default function ItemInfo(props: InfoProps) {
  const typeBadge = props.typeBadge;
  const additionalBadgeList = props.additionalBadgeList;
  const presentationTitle = props.presentationTitle;
  const router = useRouter();
  return (
    <>
      <Box margin="14px 0px 10px">
        <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
          {typeBadge.text}
        </Tag>
        {additionalBadgeList.map((badge, index) => (
          <Tag
            lineHeight="20px"
            backgroundColor={theme.colors.grayEE}
            color={theme.colors.black}
            key={index}
          >
            {badge.text}
          </Tag>
        ))}
      </Box>
      <Box
        fontSize="15px"
        lineHeight="22px"
        fontWeight="500"
        css={css`
          cursor: pointer;
        `}
        onClick={() => {
          router.push(presentationTitle.link);
        }}
      >
        {presentationTitle.text}
      </Box>
    </>
  );
}
