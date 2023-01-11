import { css } from '@emotion/react';

import { Box } from 'components/Atoms';
import SwipeItemImage from 'components/Organisms/Search/SwipeItem/SwipeItemImage';
import SwipeItemInfo from 'components/Organisms/Search/SwipeItem/SwipeItemInfo';
import { TPostMostPick } from 'states/pickRanking';

export default function SwipeItem({ contents }: TPostMostPick) {
  return (
    <Box
      overflowX="auto"
      margin="0px -15px"
      css={css`
        scroll-snap-type: x mandatory;
      `}
    >
      <Box
        display="flex"
        flexDirection="row"
        minWidth="100%"
        padding="0px 15px"
        css={css`
          float: left;
        `}
      >
        {contents.map((content, index) => (
          <Box
            key={content.id ?? index}
            flex="0 0 auto"
            width="170px"
            margin="0px 2.5px"
          >
            <SwipeItemImage presentationImage={content.presentationImage} />
            <SwipeItemInfo
              title={content.title}
              additionalBadgeList={content.additionalBadgeList}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
