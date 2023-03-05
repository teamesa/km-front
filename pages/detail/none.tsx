import { useRouter } from 'next/router';

import Alert from 'assets/error/Alert';
import { Box, Button } from 'components/Atoms';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function DetailNone() {
  const router = useRouter();

  useInitHeader({
    headerLeft: 'default',
    headerEnd: 'home',
    headerLeftAction: () => router.back(),
  });

  return (
    <Box
      position="fixed"
      top="calc(50% - 110px)"
      left="0px"
      width="100%"
      textAlign="center"
    >
      <Alert />
      <Box paddingTop="20px" fontSize="13px" lineHeight={1.54}>
        해당 컨텐츠는 관리자에 의해 삭제되었습니다.
        <br /> 상세페이지로 이동할 수 없습니다.
      </Box>
      <Button
        marginTop="40px"
        display="inline-block"
        padding="12px 28px"
        color={theme.colors.white}
        fontSize="13px"
        lineHeight={1.54}
        background={theme.colors.black}
        onClick={() => {
          router.push('/');
        }}
      >
        메인으로 이동
      </Button>
    </Box>
  );
}
