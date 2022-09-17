import EmptyArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/EmptyArchiveSquare';
import InputArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/InputArchiveSquare';
import LoadingArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/LoadingArchiveSquare';
import PhotoArchiveSquare from 'components/Organisms/Archive/ArchiveFileUploadForm/PhotoArchiveSquare';
import {
  ArchiveSquareState,
  ArchiveSqureStateEnum,
} from 'states/archive-square';

export default function ArchiveSquare({
  square: { state, pictureSrc, key },
}: {
  square: ArchiveSquareState;
}) {
  switch (state) {
    case ArchiveSqureStateEnum.input:
      return <InputArchiveSquare />;
    case ArchiveSqureStateEnum.loading:
      return <LoadingArchiveSquare />;
    case ArchiveSqureStateEnum.photo:
      if (pictureSrc != undefined) {
        return <PhotoArchiveSquare src={pictureSrc} squareId={key} />;
      }
    case ArchiveSqureStateEnum.empty:
    default:
      return <EmptyArchiveSquare />;
  }
}
