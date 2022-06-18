import { Box } from 'components/Atoms';
import StarScope from 'components/Molecules/StarScope';

export default function Rating() {
  return (
    <Box paddingTop="20px" textAlign="center" fontSize="18px">
      <Box>이 문화생활, 어땠나요?</Box>
      <Box marginTop="16px" justifyContent="center">
        <StarScope currentStep={4} />
      </Box>
    </Box>
  );
}
