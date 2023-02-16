import Alert from 'assets/error/Alert';
import { Box } from 'components/Atoms';

export default function BlankArchiveListSection() {
  return (
    <Box paddingTop="150px" margin="0 auto" width="100%" textAlign="center">
      <Alert />
      <Box marginTop="20px" fontSize="14px" fontWeight="500" lineHeight="1.54">
        MY 아카이브가 비어있습니다. <br />
        다녀온 문화생활로 채워주세요.
      </Box>
    </Box>
  );
}
