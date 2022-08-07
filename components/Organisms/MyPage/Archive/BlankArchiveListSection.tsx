import Alert from 'assets/error/Alert';
import { Box, FlexBox } from 'components/Atoms';

export default function BlankArchiveListSection() {
  return (
    <Box
      paddingTop="140px"
      margin="0 auto"
      max-width="200px"
      width="100%"
      textAlign="center"
    >
      <Alert />
      <Box marginTop="20px" fontSize="13px" lineHeight="20px">
        my 아카이브가 비어있습니다. <br />
        다녀온 문화생활로 채워주세요.
      </Box>
    </Box>
  );
}
