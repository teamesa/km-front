import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useRecoilValueLoadable } from 'recoil';

import { Box } from 'components/Atoms';
import { DetailState } from 'states';

export default function ExhibitionImagesSection() {
  const router = useRouter();
  const { id } = router.query;
  const { contents, state } = useRecoilValueLoadable(DetailState(Number(id)));

  const baseUrl =
    'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg';
  switch (state) {
    case 'hasValue':
      const { summary } = contents;
      const { thumbnailImageUrl } = summary;
      return (
        <Box
          position="fixed"
          top="45px"
          width="100%"
          height="100%"
          maxHeight="500px"
          background={`url(${thumbnailImageUrl ?? baseUrl}) no-repeat`}
          css={css`
            background-size: 100%;
          `}
        />
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw <div>Error....</div>;
  }
}
