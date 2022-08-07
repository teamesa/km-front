import { useRecoilValue } from 'recoil';

import AlertArchiveAskPopup from 'components/Organisms/Popup/AlertArchiveAskPopup';
import AlertCancelConfirmPopup from 'components/Organisms/Popup/AlertCancelConfirmPopup';
import AlertSuccessPopup from 'components/Organisms/Popup/AlertConfirmPopup';
import ArchiveWirteConfirmPopup from 'components/Organisms/Popup/ArchiveWirteConfirmPopup';
import ArchiveWirteErrorPopup from 'components/Organisms/Popup/ArchiveWirteErrorPopup';
import MyArchiveDetailPopup from 'components/Organisms/Popup/MyArchiveDetailPopup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';

const PopupRouter = () => {
  const popupName = useRecoilValue(PopupNameState);

  switch (popupName) {
    case POPUP_NAME.ALERT_CONFIRM:
      return <AlertSuccessPopup />;
    case POPUP_NAME.ALERT_CANCEL_CONFIRM:
      return <AlertCancelConfirmPopup />;
    case POPUP_NAME.POPUP_ARCHIVE_DETAIL:
      return <MyArchiveDetailPopup />;
    case POPUP_NAME.ALERT_ARCHIVE_ASK:
      return <AlertArchiveAskPopup />;
    case POPUP_NAME.ARCHIVE_WRITE_CONFIRM:
      return <ArchiveWirteConfirmPopup />;
    case POPUP_NAME.ARCHIVE_WRITE_ERROR:
      return <ArchiveWirteErrorPopup />;
    default:
      return null;
  }
};

export default PopupRouter;
