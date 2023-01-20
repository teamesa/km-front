import { css } from '@emotion/react';

import { Box, FlexBox } from 'components/Atoms';
import MainSwipeImage from 'components/Organisms/Home/Module/SwipeItem/MainSwipeImage';
import SubSwipeImage from 'components/Organisms/Home/Module/SwipeItem/SubSwipeImage';
import theme from 'styles/theme';

export default function UnbalencedSwiper({
  thumbnailPhotoUrl,
  photoUrls,
}: {
  thumbnailPhotoUrl: string;
  photoUrls: string[];
}) {
  return (
    <Box
      marginTop="60px"
      width="100vw"
      maxWidth={theme.view.webView}
      height="420px"
      overflowY="hidden"
      overflowX="scroll"
      css={css`
        scroll-snap-type: x mandatory;
      `}
    >
      <FlexBox width="max-content" flexDirection="row">
        <MainSwipeImage src={thumbnailPhotoUrl} />
        {photoUrls.map((subUrl, index) => (
          <SubSwipeImage
            src={subUrl}
            key={`subSwipeItem-${subUrl.substr(
              subUrl.length - 5,
              subUrl.length,
            )}-${index}`}
          />
        ))}
      </FlexBox>
    </Box>
  );
}
