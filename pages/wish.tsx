import { Box } from 'components/Atoms';
import { useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export const getServerSideProps = useUserProps;
export default function Wish() {
  useInitHeader({ headerLeft: 'disabled' });
  return <Box>Wish</Box>;
}
