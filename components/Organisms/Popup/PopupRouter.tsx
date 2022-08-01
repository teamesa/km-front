import { useRecoilValue } from 'recoil';

import AlertCancelConfirmPopup from 'components/Organisms/Popup/AlertCancelConfirmPopup';
import AlertSuccessPopup from 'components/Organisms/Popup/AlertConfirmPopup';
import AlertLoginConfirmationPopup from 'components/Organisms/Popup/AlertLoginConfirmationPopup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';

const PopupRouter = () => {
  const popupName = useRecoilValue(PopupNameState);

  switch (popupName) {
    case POPUP_NAME.ALERT_CONFIRM:
      return <AlertSuccessPopup />;
    case POPUP_NAME.ALERT_CANCEL_CONFIRM:
      return <AlertCancelConfirmPopup />;
    case POPUP_NAME.ALERT_LOGIN_CONFIRMATION:
      return <AlertLoginConfirmationPopup />;
    default:
      return null;
  }
};

export default PopupRouter;
