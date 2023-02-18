import { AxiosResponse } from 'axios';
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import { customKmAxios } from 'api/customKmAxios';
import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Button, FlexBox, Span } from 'components/Atoms';
import { Loader } from 'components/Atoms/Loader';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { LikeResponse } from 'constants/type/api';
import { AlertState, PopupNameState } from 'states';
import { useGetItemsById } from 'states/detail';
import { User } from 'states/user';
import theme from 'styles/theme';

export default function NavigatorHeart() {
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const loginState = useRecoilValue(User);
  const data = useRecoilValue(useGetItemsById);
  const heart = data?.itemInfoAdditionalInfo.heart;
  const heartCount = data?.itemInfoAdditionalInfo.heartCount;
  const refreshGetItems = useRecoilRefresher_UNSTABLE(useGetItemsById);

  const setToPick = async () => {
    if (!loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
      return null;
    }
    try {
      const axiosData = (await customKmAxios({
        url: decodeURIComponent(`${heart?.link}${!heart?.heartClicked}`),
        method: 'PUT',
      })) as AxiosResponse<LikeResponse>;
      if (axiosData.data.content !== undefined) {
      }
    } catch (error) {
      setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
      setPopupName(POPUP_NAME.ALERT_CONFIRM);
    }
    refreshGetItems();
  };
  return (
    <FlexBox>
      <Button onClick={setToPick} marginTop="5px">
        <NavWish
          stroke={
            heart?.heartClicked === true
              ? theme.colors.white
              : theme.colors.white
          }
          fill={
            heart?.heartClicked === true
              ? theme.colors.white
              : theme.colors.black
          }
        />
      </Button>
      <Span
        fontSize="10px"
        fontWeight={500}
        alignSelf="center"
        color={theme.colors.white}
        marginLeft="2px"
      >
        {heartCount}
      </Span>
    </FlexBox>
  );
}
