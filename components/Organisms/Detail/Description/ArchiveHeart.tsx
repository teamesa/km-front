import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Tag, Span, Button } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import { useResetDetailArchiveFunction } from 'states/detail';
import { User } from 'states/user';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';
import { homeModuleIndividualStateFamily, homeModuleState } from 'states/home';

type PickStatus = {
  content: boolean;
};

export default function ArchiveHeart({
  heart,
  heartCount,
  optionalFunction,
  archiveId
}: {
  heart: { heartClicked: boolean; link: string };
  heartCount: number;
  optionalFunction?: () => {};
  archiveId?: number;
}) {
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const loginState = useRecoilValue(User);
  const resetPickState = useResetDetailArchiveFunction(archiveId);

  const setToPick = async () => {
    if (!loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
      return null;
    }
    const axios = customAxios();
    //FIXME: 윤기님에게 아카이브 heart url 수정 요청
    //FIXME: 윤기님에게 아카이브 heartClicked도 수정 요청 - 지금 {전시글heart정보}를 내려주고 있는듯. {아카이브heart정보}가 필요함.
    const url = `/api/archives/${archiveId}/like?status=${!heart.heartClicked}`;

    try {
      const axiosData = (await axios({
        url,
        method: 'PUT',
      })) as AxiosResponse<PickStatus>;
      if (axiosData.data.content !== undefined) {
        if(optionalFunction !== undefined){
          optionalFunction();
        }
      }
    } catch (error) {
      setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
      setPopupName(POPUP_NAME.ALERT_CONFIRM);
    }
    resetPickState;
  };

  return (
    <Button onClick={setToPick}>
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
        boxShadow="0 0 8px 0 rgba(0, 0, 0, 0.08)"
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
