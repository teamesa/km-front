import { useRouter } from 'next/router';

import { MyPageImageAsset } from 'assets/mypage';
import { Box, Button } from 'components/Atoms';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const HEADER_SPACE = 45;
const APP_BAR_SPACE = 60;
const BOTTM_BUTTONS_SPACE = 210;

export default function LoginPage() {
  const router = useRouter();
  useInitHeader({ headerLeft: 'disabled', headerRight: 'disabled' });
  return (
    <Box paddingLeft="15px" paddingRight="15px">
      <Box
        style={{
          height: `calc(100vh - (${HEADER_SPACE}px + ${APP_BAR_SPACE}px + ${BOTTM_BUTTONS_SPACE}px + var(--platformBottomArea)))`,
        }}
      >
        <Box width="100%">
          <Box
            paddingTop="40px"
            paddingBottom="15px"
            fontSize="22px"
            fontWeight={500}
            lineHeight={1.45}
            textAlign="left"
            color={theme.colors.black}
          >
            당신의 문화생활 로드맵,
            <br />
            킬로미터
          </Box>
          <MyPageImageAsset width="122px" height="20px" type="logo" />
        </Box>
      </Box>
      <Box>
        <Box
          fontSize="15px"
          fontWeight={500}
          lineHeight={1.47}
          textAlign="center"
          color={theme.colors.black}
          marginBottom="20px"
        >
          SNS 계정으로 간편하게
        </Box>
        <Button
          onClick={() =>
            router.replace(`/api/login?redirect=${router.query.redirect ?? ''}`)
          }
        >
          <MyPageImageAsset
            height="50px"
            width="100%"
            type="naver"
            marginBottom="10px"
          />
        </Button>
      </Box>
    </Box>
  );
}
