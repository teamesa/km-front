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
  const state = useRecoilValueLoadable(DetailState(Number(id)));
  const detailImageUrl = state?.contents?.summary?.detailImageUrl;

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
