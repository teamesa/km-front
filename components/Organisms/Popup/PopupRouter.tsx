import { useRecoilValue } from 'recoil';

import { Box } from 'components/Atoms';
import AlertSuccessPopup from 'components/Organisms/Popup/AlertConfirmPopup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';

const PopupRouter = () => {
  const popupName = useRecoilValue(PopupNameState);

  switch (popupName) {
    case POPUP_NAME.ALERT_SUCCESS:
      return <AlertSuccessPopup />;

    default:
      return null;
  }
};

export default PopupRouter;
