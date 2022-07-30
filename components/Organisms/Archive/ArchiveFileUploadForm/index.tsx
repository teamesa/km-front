import { Box } from 'components/Atoms';
import EmptyArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/EmptyArchiveSquare';
import InputArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/InputArchiveSquare';
import LoadingArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/LoadingArchiveSquare';
import PhotoArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/PhotoArchiveSquare';

export default function ArchiveFileUploadForm() {
  return (
    <Box
      marginTop="20px"
      display="flex"
      minWidth="345px"
      height="111px"
      flexDirection="row"
      justifyContent="space-between"
    >
      <PhotoArchiveSquare />
      <LoadingArchiveSquare />
      <EmptyArchiveSquare />
    </Box>
  );
}
