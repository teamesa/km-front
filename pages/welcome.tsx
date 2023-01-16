import { useRouter } from 'next/router';

import { MyPageImageAsset } from 'assets/mypage';
import { Box, Button, FlexBox, Span } from 'components/Atoms';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const HEADER_SPACE = 45;
const APP_BAR_SPACE = 60;
const LAST_BUTTON = 60;

export default function Welcome() {
  const router = useRouter();
  useInitHeader({ headerLeft: 'disabled', headerRight: 'disabled' });
  return (
    <Box paddingLeft="15px" paddingRight="15px">
      <Box
        style={{
          height: `calc(100vh - (${HEADER_SPACE}px + ${APP_BAR_SPACE}px + ${LAST_BUTTON}px + var(--platformBottomArea)))`,
        }}
        paddingTop="45px"
      >
        <Box
          fontSize="32px"
          fontWeight={500}
          lineHeight={0.94}
          textAlign="left"
          color={theme.colors.black}
          marginBottom="22px"
        >
          반갑습니다
        </Box>
        <Box>
          <Span
            fontSize="22px"
            fontWeight={500}
            lineHeight={1.55}
            textAlign="left"
            color={theme.colors.black}
            display="box"
          >
            문화생활 플랫폼
          </Span>
          <FlexBox alignItems="baseline">
            <MyPageImageAsset width="122px" height="20px" type="logo" />
            <Box
              fontSize="22px"
              fontWeight={500}
              lineHeight={1.55}
              textAlign="left"
              color={theme.colors.black}
              paddingLeft="4px"
            >
              에 오신걸
            </Box>
          </FlexBox>
          <Box
            fontSize="22px"
            fontWeight={500}
            lineHeight={1.55}
            textAlign="left"
            color={theme.colors.black}
          >
            환영합니다
          </Box>
        </Box>
      </Box>
      <Button
        width="100%"
        textAlign="center"
        backgroundColor={theme.colors.lime}
        height="50px"
        fontSize="16px"
        fontWeight={500}
        lineHeight={1.5}
        color={theme.colors.black}
        paddingTop="15px"
        paddingBottom="14px"
        onClick={() => router.push('/')}
      >
        킬로미터 시작하기
      </Button>
    </Box>
  );
}
