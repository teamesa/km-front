import { css } from '@emotion/react';

import { Box } from 'components/Atoms';
import PickHeart from 'components/Organisms/Pick/PickItem/PickHeart';
import PickItemImage from 'components/Organisms/Pick/PickItem/PickItemImage';
import PickItemInfo from 'components/Organisms/Pick/PickItem/PickItemInfo';

interface ItemProps {
  content: PickPageContent;
}

interface PickPageContent {
  additionalBadgeList: {
    text: string;
    typeBadge: boolean;
  }[];
  heart: {
    heartClicked: boolean;
    id: number;
    link: string;
  };
  id: number;
  presentationImage: {
    url: string;
    link: string;
    backgroundText: string;
    dimColor: string;
    opacity: number;
    dimTarget: boolean;
  };
  title: {
    link: string;
    text: string;
  };
}

export default function PickItem({ content }: ItemProps) {
  return (
    <Box
      position="relative"
      flex="0 0 50%"
      padding="0px 2.5px"
      css={css`
        &:nth-child(n + 3) {
          margin-top: 40px;
        }
      `}
    >
      <PickHeart />
      <PickItemImage presentationImage={content.presentationImage} />
      <PickItemInfo
        title={content.title}
        additionalBadgeList={content.additionalBadgeList}
      />
    </Box>
  );
}
