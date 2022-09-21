import Alert from 'assets/error/Alert';
import { Box } from 'components/Atoms';

export default function NoPickList() {
  return (
    <>
      <Box
        position="fixed"
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
          PICK한 문화생활이 없습니다.
          <br />
          관심있는 문화생활에 하트를 눌러주세요.
        </Box>
      </Box>
    </>
  );
}
