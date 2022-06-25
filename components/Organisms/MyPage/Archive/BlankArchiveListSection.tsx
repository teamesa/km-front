import Alert from 'assets/error/Alert';
import { Box, FlexBox } from 'components/Atoms';

export default function BlankArchiveListSection() {
  return (
    <FlexBox
      position="fixed"
      top="calc(50% - 10px)"
      width="100%"
      textAlign="center"
      flexDirection="column"
      alignItems="center"
    >
      <Alert />
      <Box margin="20px" fontSize="13px" lineHeight="20px">
        my 아카이브가 비어있습니다. <br />
        다녀온 문화생활로 채워주세요.
      </Box>
    </FlexBox>
  );
}
