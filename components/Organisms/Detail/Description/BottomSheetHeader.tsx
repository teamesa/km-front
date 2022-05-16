import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function BottomSheetHeader() {
  return (
    <Box
      height="25px"
      borderRadius="24px 24px 0px 0px"
      position="relative"
      backgroundColor={theme.colors.white}
    />
  );
}
