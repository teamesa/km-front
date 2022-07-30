import Image from 'next/image';

import { WhiteClose } from 'assets/archive/WhiteClose';
import { Box, Button } from 'components/Atoms';
import theme from 'styles/theme';
export default function PhotoArchiveSquare() {
  return (
    <Box
      width="111px"
      height="111px"
      backgroundColor={theme.colors.gray99}
      position="relative"
    >
      <Image
        width="111px"
        height="111px"
        alt="picture"
        src="https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/api/2022-07-30/090002-%C3%A1%C2%84%C2%86%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9.jpeg"
      ></Image>
      <Button
        width="20px"
        height="20px"
        position="absolute"
        top="0px"
        right="0px"
        backgroundColor={theme.colors.black}
      >
        <WhiteClose />
      </Button>
    </Box>
  );
}
