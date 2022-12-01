import { Box } from 'components/Atoms';
import SwipeItem from 'components/Organisms/Search/SwipeItem';

export default function PickRanking() {
  return (
    <>
      <Box
        marginBottom="20px"
        fontSize="15px"
        lineHeight="22px"
        fontWeight="500"
      >
        많이 PICK한 문화생활
      </Box>
      <SwipeItem />
    </>
  );
}
