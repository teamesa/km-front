import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import noImage from 'assets/common/no_image_375x500.png';
import { Box } from 'components/Atoms';
import { useGetItemsById } from 'states/detail';
import theme from 'styles/theme';

export default function ExhibitionImage() {
  const data = useRecoilValue(useGetItemsById);
  const detailImageUrl = data?.detailImageUrl;

  return (
    <Box
      position="fixed"
      top="45px"
      width="100%"
      height="100%"
      maxHeight="450px"
      maxWidth={theme.view.webView}
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
