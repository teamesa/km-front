import Image from 'next/image';
import { useRouter } from 'next/router';

import noImage from 'assets/common/no_image_375x500.png';
import { Box, FlexBox } from 'components/Atoms';

export default function ExhibitionTitle({
  title,
  thumbnailImageUrl,
}: {
  title: string | string[];
  thumbnailImageUrl: string;
}) {
  return (
    <FlexBox marginTop="48px" paddingBottom="20px">
      <Image
        src={thumbnailImageUrl ? thumbnailImageUrl : noImage}
        alt="image"
        width="64px"
        height="64px"
        objectFit="cover"
      />
      <Box fontSize="13px" margin="10px 15px">
        {title}
      </Box>
    </FlexBox>
  );
}
