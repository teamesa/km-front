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
      width="100%"
      height="49px"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Button width="40px" onClick={headerLeftAction}>
        <Box
          width="48px"
          height="4px"
          borderRadius="2px"
          backgroundColor={theme.colors.grayE9}
          alignItems="center"
        />
      </Button>
    </Box>
  );
}
