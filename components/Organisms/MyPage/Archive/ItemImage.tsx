import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import type { PresentationImage } from 'states/list';

type ImageProps = {
  presentationImage: PresentationImage;
};

export default function ItemImage(props: ImageProps) {
  const presentationImage = props.presentationImage;
  return (
    <>
      <Box width="75px" height="75px" position="relative">
        <Image
          src={
            !presentationImage.url
              ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
              : presentationImage.url
          }
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </>
  );
}
