import Image from 'next/image';

import { Box } from 'components/Atoms';

type ImageProps = {
  imageUrl: string;
};

export default function ItemImage(props: ImageProps) {
  const imageUrl = props.imageUrl;
  return (
    <>
      <Box width="75px" height="75px" position="relative">
        <Image
          src={
            !imageUrl
              ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
              : imageUrl
          }
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </>
  );
}
