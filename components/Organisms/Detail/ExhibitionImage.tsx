import Image from 'next/image';
import { useRouter } from 'next/router';

import { useItems } from 'api/v1/hooks/items';
import noImage from 'assets/common/no_image_375x500.png';
import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function ExhibitionImage() {
  const router = useRouter();
  const { useGetItemsById } = useItems();
  const { data: getItems } = useGetItemsById(Number(router.query.id));
  const detailImageUrl = getItems?.data?.detailImageUrl;

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
