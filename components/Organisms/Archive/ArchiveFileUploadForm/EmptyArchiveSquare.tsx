import { Box } from 'components/Atoms';
import theme from 'styles/theme';
export default function EmptyArchiveSquare() {
  return (
    <Box
      width="111px"
      height="111px"
      backgroundColor={theme.colors.white}
      position="relative"
    ></Box>
  );
}
