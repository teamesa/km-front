import { Box } from 'components/Atoms';
import SwipeItemInfo from 'components/Organisms/Home/Module/SwipeItem/SwipeItemInfo';
import UnbalencedSwiper from 'components/Organisms/Home/Module/SwipeItem/UnbalencedSwiper';

export default function SwipeItem({
  thumbnailPhotoUrl,
  photoUrls,
  title,
  content,
  keywords,
}: {
  thumbnailPhotoUrl: string;
  photoUrls: string[];
  title: string;
  content: string;
  keywords: string[];
}) {
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
