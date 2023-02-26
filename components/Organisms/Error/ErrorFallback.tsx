import Alert from 'assets/error/Alert';
import { Box } from 'components/Atoms';

export default function ErrorFallback() {
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
        margin="20px 0px 12px"
        fontSize="13px"
        lineHeight="20px"
        fontWeight="500"
      >
        시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
      </Box>
    </Box>
  );
}
