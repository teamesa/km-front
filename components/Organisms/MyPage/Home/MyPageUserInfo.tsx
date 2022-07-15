import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Profile } from 'assets/mypage';
import { Box, Input } from 'components/Atoms';
import { loadingState } from 'states/loading';
import { User } from 'states/user';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';
export default function MyPageUserInfo() {
  const { name, imageUrl } = useRecoilValue(User);
  const setLoading = useSetRecoilState(loadingState);

  const router = useRouter();
  const uploadProfile = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file, file.name);
    const axios = customAxios();
    try {
      await axios.put('/api/user/profile', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
    } catch (_) {
      setLoading(false);
      return;
    }
    setLoading(false);
    router.reload();
  };
  return (
    <Box width="100%" height="70px" marginBottom="20px">
      <Box display="flex">
        <Box width="70px" height="70px" position="relative">
          <Box width="70px" height="70px" borderRadius="50%" overflow="hidden">
            {imageUrl ? (
              <Image src={imageUrl} width="70px" height="70px" alt="" />
            ) : (
              <Profile />
            )}
          </Box>
          <Box
            position="absolute"
            top="48px"
            left="48px"
            backgroundColor={theme.colors.gray66}
            width="22px"
            height="22px"
            textAlign="center"
            color={theme.colors.white}
            lineHeight="22px"
            borderRadius="50%"
          >
            +
          </Box>
          <Box width="70px" height="70px" top="0px" position="absolute">
            <Input
              width="100%"
              height="100%"
              type="file"
              opacity="0"
              border="none"
              id="profile"
              backgroundColor="transparent"
              onChange={(e) => uploadProfile(e)}
            />
          </Box>
        </Box>
        <Box
          paddingLeft="30px"
          paddingTop="24px"
          paddingBottom="23px"
          fontSize="19px"
          fontWeight={500}
          lineHeight={1.37}
          textAlign="left"
          color={theme.colors.black}
        >
          {name}
        </Box>
      </Box>
    </Box>
  );
}
