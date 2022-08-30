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
      position="absolute"
      top="-48px"
      left="calc(50% - 14px)"
      onClick={headerLeftAction}
    >
      <CloseBtn />
    </Box>
  );
}
