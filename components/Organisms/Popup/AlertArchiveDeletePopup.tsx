import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import {
  ClickedArchiveId,
  myArchiveDeleteResponse,
} from 'states/myArchiveDetail';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

/** TODO: 취소 및 확인 누른 후 액션에 대한 정의필요 */

const AlertArchiveDeletePopup = () => {
  const alertState = useRecoilValue(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const clickedArchiveIdState = useRecoilValue(ClickedArchiveId);

  const [response, setResponse] = useState('');
  const [readStatus, writeStatus] = useState('');

  const router = useRouter();

  const dd = async () => {
    const axios = customAxios();
    const { data } = await axios({
      url: `/api/archive/${clickedArchiveIdState.toString()}`,
      method: 'DELETE',
    });

    return data;
  };

  const aaa = () => {
    dd().then(() => {
      setResponse('success');
    });
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
          onClick={aaa}
        >
          <Box color={theme.colors.white}>확인</Box>
        </Button>
      </Box>
    </Popup>
  );
};

export default AlertArchiveDeletePopup;
