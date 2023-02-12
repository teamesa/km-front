import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Profile } from 'assets/mypage';
import { Box, FlexBox, Input } from 'components/Atoms';
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
      <FlexBox>
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
            <Input
              width="100%"
              height="100%"
              type="file"
              opacity="0"
              border="none"
              id="profile"
              backgroundColor="transparent"
              onChange={(e) => uploadProfile(e)}
              fontSize="0"
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                z-index: 100;
                ::-webkit-file-upload-button {
                  cursor: pointer;
                }
              `}
            />
          </Box>
          <Box width="70px" height="70px" top="0px" position="absolute"></Box>
        </Box>
        <Box
          marginLeft="30px"
          marginTop="24px"
          marginBottom="23px"
          fontSize="19px"
          fontWeight={500}
          lineHeight={1.37}
          textAlign="left"
          color={theme.colors.black}
          display="-webkit-box"
          css={css`
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          `}
          overflow="hidden"
        >
          {name}
        </Box>
      </FlexBox>
    </Box>
  );
}
