import { Box } from 'components/Atoms';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Wish() {
  useInitHeader({ headerLeft: 'disabled' });
  return <Box>Wish</Box>;
}
