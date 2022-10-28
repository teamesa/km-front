import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import ItemAdditionalInfo from 'components/Organisms/List/ListItem/ItemAdditionalInfo';
import ItemHeart from 'components/Organisms/List/ListItem/ItemHeart';
import ItemImage from 'components/Organisms/List/ListItem/ItemImage';
import ItemInfo from 'components/Organisms/List/ListItem/ItemInfo';
import {
  SearchPageContents,
  SearchHeartPickFuction,
  searchListState,
} from 'states/search';

interface ItemProps {
  content: SearchPageContents;
}

export default function SearchResultItem({ content }: ItemProps) {
  const SearchHeartPick = SearchHeartPickFuction(content.id);

  return (
    <Box margin="0px 0px 40px">
      <ItemImage presentationImage={content.presentationImage} />
      <Box position="relative">
        <ItemHeart heart={content.heart} optionalFunction={SearchHeartPick} />
        <ItemInfo
          typeBadge={content.typeBadge}
          additionalBadgeList={content.additionalBadgeList}
          presentationTitle={content.title}
        />
        <ItemAdditionalInfo
          listItemAdditionalInfo={content.listItemAdditionalInfo}
        />
      </Box>
    </Box>
  );
}
