import { useRouter } from 'next/router';

import Alert from 'assets/error/Alert';
import { Box, Button } from 'components/Atoms';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Error404() {
  useInitHeader({ headerLeft: 'disabled', headerRight: 'disabled' });
  const router = useRouter();
  return (
    <Box
      position="fixed"
      top="calc(50% - 110px)"
      left="0px"
      width="100%"
      textAlign="center"
    >
      <Alert />
      <Box
        margin="20px 0px 12px"
        fontSize="16px"
        lineHeight="18px"
        fontWeight="500"
      >
        요청하신 서비스를 진행할 수 없습니다
      </Box>
      <Box marginBottom="40px" fontSize="13px" lineHeight="18px">
        이용에 불편을 드려 죄송합니다. <br />
        잠시 후 다시 접속해 주세요.
      </Box>
      <Button
        display="inline-block"
        height="40px"
        width="130px"
        color="#ffffff"
        fontSize="12px"
        lineHeight="40px"
        background="#000000"
        onClick={() => {
          router.push('/');
        }}
      >
        메인으로 이동
      </Button>
    </Box>
  );
}
