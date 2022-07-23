import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';

const AlertSuccessPopup = () => {
  const alertState = useRecoilValue(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  console.log('sd');
  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

  return (
    <Popup>
      <Box width="315px" borderRadius="12px">
        <Box>
          <Box>{alertState.title}</Box>
          <Box>{alertState.description}</Box>
        </Box>
        <Button
          height="50px"
          width="100%"
          fontSize="16px"
          onClick={handleClosePopup}
        >
          확인
        </Button>
      </Box>
    </Popup>
  );
};

export default AlertSuccessPopup;
