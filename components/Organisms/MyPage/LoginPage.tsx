import { useRouter } from 'next/router';

import { MyPageImageAsset } from 'assets/mypage';
import { Box, Button } from 'components/Atoms';
import theme from 'styles/theme';

const HEADER_SPACE = 45;
const APP_BAR_SPACE = 60;
const BOTTM_BUTTONS_SPACE = 210;

export default function LoginPage() {
  const router = useRouter();
  return (
    <Box paddingLeft={15} paddingRight={15}>
      <Box
        style={{
          height: `calc(100vh - (${HEADER_SPACE}px + ${APP_BAR_SPACE}px + ${BOTTM_BUTTONS_SPACE}px + var(--platformBottomArea)))`,
        }}
      >
        <Box width={'100%'}>
          <Box
            paddingTop={'40px'}
            fontFamily={'SpoqaHanSansNeo'}
            fontSize={22}
            fontStyle={'normal'}
            letterSpacing={'normal'}
            fontWeight={500}
            lineHeight={1.45}
            textAlign={'left'}
            color={theme.colors.black}
          >
            당신의 문화생활 로드맵,
            <br />
            킬로미터
          </Box>
          <MyPageImageAsset width={173} height={50} type={'logo'} />
        </Box>
      </Box>
      <Box>
        <Box
          paddingLeft={100}
          paddingRight={99}
          fontFamily={'SpoqaHanSansNeo'}
          fontSize={15}
          fontStyle={'normal'}
          letterSpacing={'normal'}
          fontWeight={500}
          lineHeight={1.47}
          textAlign={'center'}
          color={theme.colors.black}
          marginBottom={20}
        >
          SNS 계정으로 간편하게
        </Box>
        <Button onClick={() => router.replace('/api/login')}>
          <MyPageImageAsset
            height={50}
            width={'100%'}
            type={'naver'}
            marginBottom={10}
          />
        </Button>
        <Button
          onClick={() =>
            alert('현재 애플은 미지원입니다. 네이버 로그인을 이용해주세요')
          }
        >
          <MyPageImageAsset width={'100%'} height={50} type={'apple'} />
        </Button>
      </Box>
    </Box>
  );
}
