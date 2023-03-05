import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Tag, Span, Button } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import { User } from 'states/user';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';
import { useResetHomeModulesFunction } from 'states/home';
import { listState } from 'states/list';

type PickStatus = {
  content: boolean;
};

export default function RealtimeArchiveItemHeart({
  heart,
  heartCount,
  archiveId,
  optionalFunction,
}: {
  heart: { heartClicked: boolean; link: string };
  heartCount: number;
  archiveId: number;
  optionalFunction?: () => {};
}) {
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const loginState = useRecoilValue(User);

  const setRealTimeArchiveHeart = async () => {
    // if (!loginState.isLogin) {
    //   setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
    //   setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
    //   return null;
    // }

    const axios = customAxios();
    const url = `/api/archives/1407/like?status=true`;

    try {
      const axiosData = (await axios({
        url,
        method: 'PUT',
      })) as AxiosResponse<PickStatus>;

      if (axiosData.data.content !== undefined) {
        if (optionalFunction == undefined) {
        } else {
          optionalFunction();
          console.log('else');
        }
      }
    } catch (error) {
      // console.log(error);
      // setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      // setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
    }
  };

  return (
    <Button onClick={setRealTimeArchiveHeart}>
      <Tag
        display="flex !important"
        alignItems="center"
        padding="0px 10px !important"
        margin="0px !important"
        color={
          heart.heartClicked === true ? theme.colors.lime : theme.colors.black
        }
        background={
          heart.heartClicked === true ? theme.colors.black : theme.colors.white
        }
        boxShadow="0 0 8px 0 rgba(0,0,0,0.08)"
      >
        <NavWish
          fill={
            heart.heartClicked === true ? theme.colors.lime : theme.colors.white
          }
          width="13px"
          height="12px"
          viewBox="3 4 23 22"
        />
        <Span marginLeft="4px">{heartCount}</Span>
      </Tag>
    </Button>
  );
}
