import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import { ClickedArchiveId } from 'states/myArchiveDetail';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

const AlertArchiveDeletePopup = () => {
  const setAlertState = useRecoilValue(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const clickedArchiveIdState = useRecoilValue(ClickedArchiveId);

  const deleteArchiveAxios = async () => {
    const axios = customAxios();
    const { data } = await axios({
      url: `/api/archive/${clickedArchiveIdState.toString()}`,
      method: 'DELETE',
    });

    return data;
  };

  const handleDeleteAxios = () => {
    setPopupName(POPUP_NAME.NULL);
    deleteArchiveAxios()
      .then(() => {
        setPopupName(POPUP_NAME.ALERT_CONFIRM);
        console.log('삭제완료');
      })
      .catch(() => {});

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
              {setAlertState.message}
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
            onClick={handleDeleteAxios}
          >
            <Box color={theme.colors.white}>확인</Box>
          </Button>
        </Box>
      </Popup>
    );
  };
};

export default AlertArchiveDeletePopup;
