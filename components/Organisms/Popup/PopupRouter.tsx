import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import AlertArchiveCancelConfirmPopup from 'components/Organisms/Popup/AlertArchiveCancelConfirmPopup';
import AlertArchiveDeletePopup from 'components/Organisms/Popup/AlertArchiveDeletePopup';
import AlertConfirmBackPopup from 'components/Organisms/Popup/AlertConfirmBackPopup';
import AlertSuccessPopup from 'components/Organisms/Popup/AlertConfirmPopup';
import AlertForbiddenConfirm from 'components/Organisms/Popup/AlertForbiddenConfirm';
import AlertLoginConfirmationPopup from 'components/Organisms/Popup/AlertLoginConfirmationPopup';
import ArchivePictureOverflowPopup from 'components/Organisms/Popup/ArchivePictureOverflowPopup';
import ArchiveWirteConfirmPopup from 'components/Organisms/Popup/ArchiveWirteConfirmPopup';
import MyArchiveDetailPopup from 'components/Organisms/Popup/MyArchiveDetailPopup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import { setPopup } from 'states/popupName';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PopupRouter = () => {
  const setPopupState = useSetRecoilState(setPopup);
  const [popupName, setPopupName] = useRecoilState(PopupNameState);
  const router = useRouter();

  if (popupName?.length) {
    setPopupState(true);
  } else {
    setPopupState(false);
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setPopupName(POPUP_NAME.NULL);
    });

    return () => {
      router.events.off('routeChangeStart', () => {
        setPopupName(POPUP_NAME.NULL);
      });
    };
  }, []);

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
    case POPUP_NAME.FORBIDDEN_CONFIRM:
      return <AlertForbiddenConfirm />;
    default:
      return null;
  }
};

export default PopupRouter;
