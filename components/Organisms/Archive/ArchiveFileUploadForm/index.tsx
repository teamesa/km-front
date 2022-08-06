import { useRecoilValue } from 'recoil';

import { Box } from 'components/Atoms';
import ArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/ArchiveSquare';
import { ArchiveSquareState } from 'states/archive-square';

export default function ArchiveFileUploadForm() {
  const squareMap = useRecoilValue(ArchiveSquareState);
  return (
    <Box
      marginTop="20px"
      display="flex"
      minWidth="345px"
      height="111px"
      flexDirection="row"
      justifyContent="space-between"
    >
      {squareMap.map((it, index) => (
        <ArchiveSquare key={index} square={it} />
      ))}
    </Box>
  );
}
