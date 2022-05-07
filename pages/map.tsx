import { Box } from 'components/Atoms';
import { useUserProps } from 'utils/authentication/useUser';

export const getServerSideProps = useUserProps;
export default function Map() {
  return <Box>Map</Box>;
}
