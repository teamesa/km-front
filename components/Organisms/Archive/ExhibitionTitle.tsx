import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, FlexBox } from 'components/Atoms';

export default function ExhibitionTitle() {
  const router = useRouter();
  const imageData = null;
  const { id } = router.query;
  const basiceImage =
    'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg';

  return (
    <FlexBox marginTop="48px" paddingBottom="20px">
      <Image
        src={!imageData ? basiceImage : imageData}
        alt="image"
        width="48px"
        height="64px"
        objectFit="cover"
      />
      <Box fontSize="13px" margin="10px 15px">
        황도유 : 희랍 화첩, 서른 세송이
      </Box>
    </FlexBox>
  );
}
