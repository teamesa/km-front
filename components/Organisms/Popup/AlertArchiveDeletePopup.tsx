import router from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import { ClickedArchiveId } from 'states/myArchiveDetail';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

const AlertArchiveDeletePopup = () => {
  const setPopupName = useSetRecoilState(PopupNameState);
  const setAlertState = useSetRecoilState(AlertState);
  const clickedArchiveIdState = useRecoilValue(ClickedArchiveId);

  const handleDeleteRequest = async () => {
    const axios = customAxios();

    try {
      let response = await axios({
        url: `/api/archive/${clickedArchiveIdState.toString()}`,
        method: 'DELETE',
      });

      if (response.data.archiveId !== clickedArchiveIdState) {
        setPopupName(POPUP_NAME.ALERT_CONFIRM);
        setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
      }
      setPopupName(POPUP_NAME.NULL);
    } catch (err) {
      setPopupName(POPUP_NAME.ALERT_CONFIRM);
      setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
    }

    return router.push('/mypage');
  };

  const handleCancel = () => {
    setPopupName(POPUP_NAME.POPUP_ARCHIVE_DETAIL);
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
            {ALERT_MESSAGE.ALERT.ARCHIVE_DELETE_CONFIRM.message}
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
          onClick={handleDeleteRequest}
        >
          <Box color={theme.colors.white}>확인</Box>
        </Button>
      </Box>
    </Popup>
  );
};

export default AlertArchiveDeletePopup;
