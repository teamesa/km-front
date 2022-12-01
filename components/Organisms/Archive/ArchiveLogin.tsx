import { useRouter } from 'next/router';

import Alert from 'assets/error/Alert';
import { Box, Button } from 'components/Atoms';
import theme from 'styles/theme';

export default function ArchiveLogin() {
  const router = useRouter();
  return (
    <Box
      position="absolute"
      top="calc(50% - 110px)"
      left="0px"
      width="100%"
      textAlign="center"
      fontSize="0"
    >
      <Alert width="40px" height="40px" />
      <Box
        margin="20px 0px 40px"
        fontSize="13px"
        lineHeight="20px"
        fontWeight="500"
      >
        로그인 후 이용해주세요.
      </Box>
      <Button
        display="inline-block"
        height="40px"
        width="130px"
        color={theme.colors.white}
        fontSize="13px"
        lineHeight="40px"
        background={theme.colors.black}
        onClick={() => {
          router.push('/mypage');
        }}
      >
        로그인 하기
      </Button>
    </Box>
  );
}
