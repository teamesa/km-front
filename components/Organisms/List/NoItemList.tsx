import Alert from 'assets/error/Alert';
import { Box } from 'components/Atoms';

export default function NoItemList() {
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
        등록된 문화생활이 없습니다.
      </Box>
    </Box>
  );
}
