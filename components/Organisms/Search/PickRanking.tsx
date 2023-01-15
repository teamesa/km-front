import { useRecoilValueLoadable } from 'recoil';

import { Box } from 'components/Atoms';
import SwipeItem from 'components/Organisms/Search/SwipeItem';
import { pickMostState } from 'states/pickRanking';

export default function PickRanking() {
  const pickMost = useRecoilValueLoadable(pickMostState);

  if (
    pickMost.state !== 'hasValue' ||
    pickMost?.contents?.contents?.length === 0
  )
    return <></>;

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
      <SwipeItem contents={pickMost.contents.contents} />
    </>
  );
}
