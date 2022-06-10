import { Box } from 'components/Atoms';
import ItemAdditionalInfo from 'components/Organisms/List/ItemAdditionalInfo';
import ItemHeart from 'components/Organisms/List/ItemHeart';
import ItemImage from 'components/Organisms/List/ItemImage';
import ItemInfo from 'components/Organisms/List/ItemInfo';
import type { ListPageContents } from 'states/list';

interface ItemProps {
  content: ListPageContents;
}

export default function Item(props: ItemProps) {
  const content = props.content;

  return (
    <Box margin="0px 0px 40px">
      <ItemImage presentationImage={content.presentationImage} />
      <Box position="relative">
        <ItemHeart heart={content.heart} />
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
