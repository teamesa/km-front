import Image from 'next/image';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import noImage from 'assets/common/no_image_375x500.png';
import { Box } from 'components/Atoms';
import { summaryState } from 'states/detail';

export default function ExhibitionImagesSection() {
  const data = useRecoilValue(summaryState);
  const detailImageUrl = data?.detailImageUrl;

  return (
    <Box
      position="fixed"
      top="45px"
      width="100%"
      height="100%"
      maxHeight="450px"
    >
      <Image
        src={detailImageUrl ? detailImageUrl : noImage}
        alt="image"
        width="375"
        height="500"
        layout="responsive"
      />
    </Box>
  );
}
