import { css } from '@emotion/react';

import { Box } from 'components/Atoms';
import PickHeart from 'components/Organisms/Pick/PickItem/PickHeart';
import PickItemImage from 'components/Organisms/Pick/PickItem/PickItemImage';
import PickItemInfo from 'components/Organisms/Pick/PickItem/PickItemInfo';
import { PickPageContents } from 'states/pick';

interface ItemProps {
  content: PickPageContents;
}

export default function PickItem({ content }: ItemProps) {
  return (
    <Box
      position="relative"
      flex="0 0 50%"
      padding="0px 2.5px"
      css={css`
        // 픽 리스트가 3개 이상일 경우 3번째 리스트 부터 margin-top(40)
        &:nth-of-type(n + 3) {
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
