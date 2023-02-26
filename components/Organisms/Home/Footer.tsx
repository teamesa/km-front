import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from 'assets/common/header/logo.png';
import Instagram from 'assets/home/instagram.png';
import { Box, Button, FlexBox, Input, Span } from 'components/Atoms';
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
        <Image src={Logo} alt="image" width="136px" height="20px" />
      </Box>
      <Box
        color={theme.colors.gray33}
        fontSize="12px"
        lineHeight={1.5}
        textAlign="left"
        marginBottom="30px"
      >
        문의사항이 있으실 경우
        <br />
        <FlexBox alignItems="baseline">
          <Span width="184px">
            <Input
              readOnly
              type="email"
              placeholder="Enter Mail"
              value="kilometerservice@gmail.com"
            />
          </Span>
          <Span>로 연락주세요.</Span>
        </FlexBox>
      </Box>
      <FlexBox
        fontSize="12px"
        lineHeight={1.5}
        textAlign="left"
        marginBottom="30px"
        alignItems="center"
      >
        <Button
          color={theme.colors.gray77}
          paddingRight="20px"
          onClick={() => router.push('/info?type=introduce')}
        >
          킬로미터소개
        </Button>
        <Box width="2px" height="12px" backgroundColor={theme.colors.grayDD} />
        <Button
          color={theme.colors.gray77}
          paddingX="20px"
          onClick={() => router.push('/info?type=service')}
        >
          이용약관
        </Button>
        <Box width="2px" height="12px" backgroundColor={theme.colors.grayDD} />
        <Button
          color={theme.colors.gray77}
          paddingLeft="20px"
          onClick={() => router.push('/info?type=privacy')}
        >
          개인정보처리방침
        </Button>
      </FlexBox>
      <Box
        padding="12px"
        border={`1px solid ${theme.colors.grayDD}`}
        width="44px"
        height="44px"
        borderRadius="50%"
      >
        <Image src={Instagram} alt="image" width="20px" height="20px" />
      </Box>
    </Box>
  );
}
