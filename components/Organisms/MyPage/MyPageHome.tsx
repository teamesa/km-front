import Image from 'next/image';

import { Profile } from 'assets/mypage';
import { Box } from 'components/Atoms';
import TopTabView from 'components/Molecules/TopTabView';
import theme from 'styles/theme';
import { UserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function MyPageHome({ user: { imageUrl, name } }: UserProps) {
  useInitHeader({ headerLeft: 'disabled' });
  const data = [
    { title: 'MY 아카이브', contents: [] },
    { title: '설정', contents: [] },
  ];
  return (
    <Box paddingLeft="15px" paddingRight="15px">
      {/* 마이페이지 탑 */}
      <Box width="100%" height="70px" marginBottom="20px">
        <Box display="flex">
          <Box width="70px" height="70px" position="relative">
            <Box
              width="70px"
              height="70px"
              borderRadius="50%"
              overflow="hidden"
            >
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
              borderRadius="50%"
            >
              +
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
      {/* 앵커 */}
      <TopTabView data={data} minusHeight={200}></TopTabView>
    </Box>
  );
}
