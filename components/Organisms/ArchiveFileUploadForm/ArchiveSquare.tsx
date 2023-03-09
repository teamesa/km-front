import EmptyArchiveSquare from 'components/Organisms/ArchiveFileUploadForm/EmptyArchiveSquare';
import InputArchiveSquare from 'components/Organisms/ArchiveFileUploadForm/InputArchiveSquare';
import LoadingArchiveSquare from 'components/Organisms/ArchiveFileUploadForm/LoadingArchiveSquare';
import PhotoArchiveSquare from 'components/Organisms/ArchiveFileUploadForm/PhotoArchiveSquare';
import {
  ArchiveSquareState,
  ArchiveSquareStateEnum,
} from 'states/archive-square';

export default function ArchiveSquare({
  square: { state, pictureSrc, key },
}: {
  square: ArchiveSquareState;
}) {
  switch (state) {
    case ArchiveSquareStateEnum.input:
      return <InputArchiveSquare />;
    case ArchiveSquareStateEnum.loading:
      return <LoadingArchiveSquare />;
    case ArchiveSquareStateEnum.photo:
      if (pictureSrc != undefined) {
        return <PhotoArchiveSquare src={pictureSrc} squareId={key} />;
      }
      return <EmptyArchiveSquare />;
    case ArchiveSquareStateEnum.empty:
      return <EmptyArchiveSquare />;
    default:
      return <EmptyArchiveSquare />;
  }
}
