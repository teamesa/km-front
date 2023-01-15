import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from 'assets/common/header/logo.png';
import Instagram from 'assets/home/instagram.png';
import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function Footer() {
  const router = useRouter();
  return (
    <Box
      width="100%"
      height="231px"
      marginTop="100px"
      paddingTop="30px"
      paddingX="15px"
      borderTop={`1px solid ${theme.colors.grayCC}`}
    >
      <Box marginBottom="20px">
        <Image src={Logo} alt="image" width="97px" height="16px" />
      </Box>
      <Box
        color={theme.colors.gray33}
        fontSize="12px"
        lineHeight={1.5}
        textAlign="left"
        marginBottom="30px"
      >
        문의사항이 있으실 경우
        <br /> kilometerservice@gmail.com 로 연락주세요.
      </Box>
      <Box
        display="flex"
        fontSize="12px"
        lineHeight={1.5}
        textAlign="left"
        marginBottom="30px"
      >
        <Box
          color={theme.colors.gray77}
          paddingRight="20px"
          borderRight={`1px solid ${theme.colors.grayCC}`}
        >
          킬로미터소개
        </Box>
        <Box
          color={theme.colors.gray77}
          paddingX="20px"
          borderRight={`1px solid ${theme.colors.grayCC}`}
          onClick={() => router.push('/info?type=service')}
        >
          이용약관
        </Box>
        <Box
          color={theme.colors.gray77}
          paddingLeft="20px"
          onClick={() => router.push('/info?type=privacy')}
        >
          개인정보처리방침
        </Box>
      </Box>
      <Box
        padding="12px"
        border={`1px solid ${theme.colors.grayCC}`}
        width="44px"
        height="44px"
        borderRadius="50%"
      >
        <Image src={Instagram} alt="image" width="20px" height="20px" />
      </Box>
    </Box>
  );
}
