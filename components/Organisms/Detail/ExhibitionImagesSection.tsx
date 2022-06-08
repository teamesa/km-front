import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Box } from 'components/Atoms';
import { DetailState } from 'states';

export default function ExhibitionImagesSection() {
  const router = useRouter();
  const { id } = router.query;
  const { thumbnailImageUrl } = useRecoilValue(DetailState(Number(id))).summary;
  const baseUrl =
    'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg';

  return (
    <Box
      width="100%"
      height="300px"
      background={`url(${thumbnailImageUrl ?? baseUrl}) no-repeat`}
      css={css`
        background-size: 100%;
        background-position: top;
        background-attachment: fixed;
      `}
    />
  );
}
