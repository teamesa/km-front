import { css } from '@emotion/react';
import Image from 'next/image';
import { ChangeEvent } from 'react';

import { Plus } from 'assets/archive/Plus';
import { WhiteClose } from 'assets/archive/WhiteClose';
import { Box, Button, Input } from 'components/Atoms';
import { Loader } from 'components/Atoms/Loader';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

export default function ArchiveFileUploadForm() {
  return (
    <Box
      marginTop="20px"
      display="flex"
      minWidth="345px"
      height="111px"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box
        width="111px"
        height="111px"
        backgroundColor={theme.colors.gray99}
        position="relative"
      >
        <Input
          width="100%"
          height="100%"
          type="file"
          opacity="0"
          border="none"
          id="profile"
          backgroundColor="transparent"
          onChange={(e) => uploadArchivePicture(e)}
        />
        <Box
          width="20px"
          height="20px"
          position="absolute"
          top="46px"
          left="46px"
        >
          <Plus />
        </Box>
      </Box>
      {/* <Box
        width="111px"
        height="111px"
        backgroundColor={theme.colors.gray99}
        position="relative"
      >
        <Box
          width="60px"
          height="60px"
          position="absolute"
          top="25.5px"
          left="25.5px"
          css={css`
            transform: scale(0.65);
          `}
        >
          <Loader />
        </Box>
      </Box> */}
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
      <Box
        width="111px"
        height="111px"
        backgroundColor={theme.colors.white}
        position="relative"
      ></Box>
    </Box>
  );
}

const uploadArchivePicture = async ({
  target,
}: ChangeEvent<HTMLInputElement>) => {
  const file = target.files?.[0];
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append('file', file, file.name);
  const axios = customAxios();
  try {
    // await axios.put('/api/user/profile', formData, {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // });
  } catch (_) {
    return;
  }
};
