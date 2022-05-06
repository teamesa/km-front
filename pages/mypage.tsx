import { Box } from 'components/Atoms';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function MyPage() {
  useInitHeader({ headerLeft: 'disabled' });
  return <Box>Mypage</Box>;
}
