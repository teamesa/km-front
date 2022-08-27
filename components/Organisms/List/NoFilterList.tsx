import Alert from 'assets/error/Alert';
import { Box } from 'components/Atoms';

export default function NoFilterList() {
  return (
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
        해당 필터에 맞는 결과가 없습니다.
        <br />
        상세필터를 다시 설정해주세요.
      </Box>
    </Box>
  );
}
