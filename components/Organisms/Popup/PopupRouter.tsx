import { useRecoilValue } from 'recoil';

import AlertSuccessPopup from 'components/Organisms/Popup/AlertSuccessPopup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';

const PopupRouter = () => {
  const popupName = useRecoilValue(PopupNameState);
  console.log('popupName', popupName);
  switch (popupName) {
    case POPUP_NAME.ALERT_SUCCESS:
      console.log('345345345');
      return <AlertSuccessPopup />;

    default:
      return null;
  }
};

export default PopupRouter;
