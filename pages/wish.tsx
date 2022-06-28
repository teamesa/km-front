import { Box } from 'components/Atoms';
import { Loader } from 'components/Atoms/Loader';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Wish() {
  useInitHeader({ headerLeft: 'disabled' });
  return (
    <Box>
      <Box width="80px" height="80px">
        <Loader />
      </Box>
    </Box>
  );
}
