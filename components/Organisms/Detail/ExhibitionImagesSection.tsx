import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValueLoadable } from 'recoil';

import noImage from 'assets/common/no_image_375x500.png';
import { Box } from 'components/Atoms';
import { DetailState } from 'states';

export default function ExhibitionImagesSection() {
  const router = useRouter();
  const { id } = router.query;
  const { contents, state } = useRecoilValueLoadable(DetailState(Number(id)));

  switch (state) {
    case 'hasValue':
      const { summary } = contents;
      const { thumbnailImageUrl } = summary;
      return (
        // <Box
        //   position="fixed"
        //   top="45px"
        //   width="100%"
        //   height="100%"
        //   maxHeight="500px"
        //   background={
        //     thumbnailImageUrl ? `url(${thumbnailImageUrl}) no-repeat` : noImage
        //   }
        //   css={css`
        //     background-size: 100%;
        //   `}
        // />
        <Box
          position="fixed"
          top="45px"
          width="100%"
          height="100%"
          maxHeight="450px"
        >
          <Image
            src={thumbnailImageUrl ? thumbnailImageUrl : noImage}
            alt="image"
            width="375"
            height="500"
            layout="responsive"
          />
        </Box>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw <div>Error....</div>;
  }
}
