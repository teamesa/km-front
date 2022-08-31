import { CloseBtn } from 'assets/mypage';
import { Button, Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function ModalHeader({
  headerLeftAction,
}: {
  headerLeftAction?: () => void;
  title?: string;
}) {
  return (
    <Box
      position="relative"
      width="28px"
      margin="0 auto"
      paddingBottom="20px"
      onClick={headerLeftAction}
    >
      <CloseBtn />
    </Box>
  );
}
