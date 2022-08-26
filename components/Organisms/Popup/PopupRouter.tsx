import { useRecoilValue, useSetRecoilState } from 'recoil';

import AlertArchiveAskPopup from 'components/Organisms/Popup/AlertArchiveAskPopup';
import AlertCancelConfirmPopup from 'components/Organisms/Popup/AlertCancelConfirmPopup';
import AlertSuccessPopup from 'components/Organisms/Popup/AlertConfirmPopup';
import AlertCopyLinkPopup from 'components/Organisms/Popup/AlertCopyLinkPopup';
import AlertLoginConfirmationPopup from 'components/Organisms/Popup/AlertLoginConfirmationPopup';
import ArchivePictureOverflowPopup from 'components/Organisms/Popup/ArchivePictureOverflowPopup';
import ArchiveWirteConfirmPopup from 'components/Organisms/Popup/ArchiveWirteConfirmPopup';
import ArchiveWirteErrorPopup from 'components/Organisms/Popup/ArchiveWirteErrorPopup';
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
    case POPUP_NAME.ALERT_CANCEL_CONFIRM:
      return <AlertCancelConfirmPopup />;
    case POPUP_NAME.ALERT_LOGIN_CONFIRMATION:
      return <AlertLoginConfirmationPopup />;
    case POPUP_NAME.POPUP_ARCHIVE_DETAIL:
      return <MyArchiveDetailPopup />;
    case POPUP_NAME.ALERT_ARCHIVE_ASK:
      return <AlertArchiveAskPopup />;
    case POPUP_NAME.ARCHIVE_WRITE_CONFIRM:
      return <ArchiveWirteConfirmPopup />;
    case POPUP_NAME.ARCHIVE_WRITE_ERROR:
      return <ArchiveWirteErrorPopup />;
    case POPUP_NAME.OVERFLOW_PICTURE:
      return <ArchivePictureOverflowPopup />;
    case POPUP_NAME.ALERT_COPY_LINK:
      return <AlertCopyLinkPopup />;
    default:
      return null;
  }
};

export default PopupRouter;
