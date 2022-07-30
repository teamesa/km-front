import { ChangeEvent } from 'react';

import { Plus } from 'assets/archive/Plus';
import { Box, Input } from 'components/Atoms';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';
export default function InputArchiveSquare() {
  return (
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
