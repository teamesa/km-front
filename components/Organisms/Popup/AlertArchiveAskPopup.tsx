import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, ArchiveWirteState, PopupNameState } from 'states';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

const AlertArchiveAskPopup = () => {
  const alertState = useRecoilValue(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const archiveWirte = useSetRecoilState(ArchiveWirteState);

  const handleConfirm = async () => {
    const axios = customAxios();
    try {
      await axios({
        method: 'POST',
        url: `/api/archive`,
        data: archiveWirte,
      });
      setPopupName(POPUP_NAME.ARCHIVE_WRITE_CONFIRM);
    } catch (error: any) {
      setPopupName(POPUP_NAME.ARCHIVE_WRITE_ERROR);
    }
  };

  const handleCancel = () => {
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
          width="50%"
          fontSize="16px"
          borderRadius="0 0 0 12px"
          backgroundColor={theme.colors.grayEE}
          onClick={handleCancel}
        >
          <Box color={theme.colors.black}>취소</Box>
        </Button>
        <Button
          height="50px"
          width="50%"
          fontSize="16px"
          borderRadius="0 0 12px 0"
          backgroundColor={theme.colors.black}
          onClick={handleConfirm}
        >
          <Box color={theme.colors.white}>확인</Box>
        </Button>
      </Box>
    </Popup>
  );
};

export default AlertArchiveAskPopup;
