import { useRecoilValue, useSetRecoilState } from 'recoil';

import AlertArchiveCancelConfirmPopup from 'components/Organisms/Popup/AlertArchiveCancelConfirmPopup';
import AlertArchiveDeletePopup from 'components/Organisms/Popup/AlertArchiveDeletePopup';
import AlertConfirmBackPopup from 'components/Organisms/Popup/AlertConfirmBackPopup';
import AlertSuccessPopup from 'components/Organisms/Popup/AlertConfirmPopup';
import AlertLoginConfirmationPopup from 'components/Organisms/Popup/AlertLoginConfirmationPopup';
import ArchivePictureOverflowPopup from 'components/Organisms/Popup/ArchivePictureOverflowPopup';
import ArchiveWirteConfirmPopup from 'components/Organisms/Popup/ArchiveWirteConfirmPopup';
import MyArchiveDetailPopup from 'components/Organisms/Popup/MyArchiveDetailPopup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import { setPopup } from 'states/popupName';

const PopupRouter = () => {
  const popupName = useRecoilValue(PopupNameState);
  const setPopupState = useSetRecoilState(setPopup);

  if (popupName?.length) {
    setPopupState(true);
  } else {
    setPopupState(false);
  }

  switch (popupName) {
    case POPUP_NAME.ALERT_CONFIRM:
      return <AlertSuccessPopup />;
    case POPUP_NAME.ALERT_ARCHIVE_CANCEL_CONFIRM:
      return <AlertArchiveCancelConfirmPopup />;
    case POPUP_NAME.ALERT_LOGIN_CONFIRMATION:
      return <AlertLoginConfirmationPopup />;
    case POPUP_NAME.POPUP_ARCHIVE_DETAIL:
      return <MyArchiveDetailPopup />;
    case POPUP_NAME.ALERT_CONFIRM_BACK:
      return <AlertConfirmBackPopup />;
    case POPUP_NAME.ARCHIVE_WRITE_CONFIRM:
      return <ArchiveWirteConfirmPopup />;
    case POPUP_NAME.OVERFLOW_PICTURE:
      return <ArchivePictureOverflowPopup />;
    case POPUP_NAME.ALERT_ARCHIVE_DELETE_CANCEL_CONFIRM:
      return <AlertArchiveDeletePopup />;
    default:
      return null;
  }
};

export default PopupRouter;
