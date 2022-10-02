import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Button, FlexBox, Span } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import { getSummary } from 'states/detail';
import { PresentationHeart } from 'states/list';
import { User } from 'states/user';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

type PickStatus = {
  content: boolean;
};

export default function NavigatorHeart({
  heart,
  heartCount,
}: {
  heart: PresentationHeart;
  heartCount: number;
}) {
  const router = useRouter();
  const { id } = router.query;
  const [heartState, setHeartState] = useState(heartCount);
  const [click, setClick] = useState(heart.heartClicked);
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const loginState = useRecoilValue(User);

  const setToPick = async () => {
    if (!loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
      return null;
    }
    const axios = customAxios();
    const url = `${heart.link}${!click}`;

    try {
      const axiosData = (await axios({
        url,
        method: 'PUT',
      })) as AxiosResponse<PickStatus>;
      if (axiosData.data.content !== undefined) {
        setClick(!click);
        const fetchSummary = await getSummary({ itemId: Number(id) });
        setHeartState(fetchSummary.itemInfoAdditionalInfo.heartCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FlexBox>
      <Button onClick={setToPick} marginTop="5px">
        <NavWish
          stroke={click === true ? theme.colors.white : theme.colors.white}
          fill={click === true ? theme.colors.white : theme.colors.black}
        />
      </Button>
      <Span
        fontSize="10px"
        fontWeight={500}
        alignSelf="center"
        color={theme.colors.white}
        marginLeft="2px"
      >
        {heartState}
      </Span>
    </FlexBox>
  );
}
