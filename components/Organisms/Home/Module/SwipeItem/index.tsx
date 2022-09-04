import { Box } from 'components/Atoms';
import SwipeItemInfo from 'components/Organisms/Home/Module/SwipeItem/SwipeItemInfo';
import UnbalencedSwiper from 'components/Organisms/Home/Module/SwipeItem/UnbalencedSwiper';
import { SwipeItemProps } from 'components/Organisms/Home/ModuleTypes';

export default function SwipeItem({
  thumbnailPhotoUrl,
  photoUrls,
  title,
  content,
  keywords,
}: SwipeItemProps) {
  return (
    <Box>
      <UnbalencedSwiper
        thumbnailPhotoUrl={thumbnailPhotoUrl}
        photoUrls={photoUrls}
      />
      <SwipeItemInfo title={title} content={content} keywords={keywords} />
    </Box>
  );
}
