import { useRecoilValue } from 'recoil';

import { FlexBox } from 'components/Atoms';
import ArchiveSquare from 'components/Organisms/ArchiveFileUploadForm/ArchiveSquare';
import { ArchiveSquareState } from 'states/archive-square';

export default function ArchiveFileUploadForm() {
  const squareMap = useRecoilValue(ArchiveSquareState);
  return (
    <FlexBox
      marginTop="20px"
      minWidth="345px"
      height="111px"
      flexDirection="row"
      justifyContent="space-between"
    >
      {squareMap.map((it, index) => (
        <ArchiveSquare key={index} square={it} />
      ))}
    </FlexBox>
  );
}
