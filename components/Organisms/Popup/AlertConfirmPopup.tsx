import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import theme from 'styles/theme';

const AlertConfirmPopup = () => {
  const alertState = useRecoilValue(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);

  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

  return (
    <Popup>
      <Box
        width="315px"
        borderRadius="12px"
        height="167px"
        backgroundColor={theme.colors.white}
      >
        <Box padding="50px 40px">
          <Box
            fontSize="13px"
            lineHeight="1.54"
            textAlign="center"
            color={theme.colors.black}
          >
            {alertState.message}
          </Box>
        </Box>
        <Button
          height="50px"
          width="100%"
          fontSize="16px"
          borderRadius="0 0 12px 12px"
          backgroundColor={theme.colors.black}
          onClick={handleClosePopup}
        >
          <Box color={theme.colors.white}>확인</Box>
        </Button>
      </Box>
    </Popup>
  );
};

export default AlertConfirmPopup;
