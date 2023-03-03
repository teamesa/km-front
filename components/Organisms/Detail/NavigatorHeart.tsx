import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useItemsQuery } from 'api/v1/queryHooks/items';
import usePickQuery from 'api/v1/queryHooks/pick';
import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Button, FlexBox, Span } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import { User } from 'states/user';
import theme from 'styles/theme';
import { customKmAxios } from 'api/customKmAxios';

export default function NavigatorHeart() {
  const router = useRouter();
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const loginState = useRecoilValue(User);

  const { useGetItemsById } = useItemsQuery();
  const { data: getItems, refetch } = useGetItemsById(Number(router.query.id));
  const heart = getItems?.data.itemInfoAdditionalInfo.heart;
  const heartCount = getItems?.data.itemInfoAdditionalInfo.heartCount;

  const { usePutPick } = usePickQuery();
  const { mutate: putPick } = usePutPick();

  const setToPick = async () => {
    if (!loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
      return null;
    } else {
      putPick(
        {
          id: Number(router.query.id),
          body: !heart?.heartClicked,
        },
        {
          onSuccess: () => {
            refetch();
          },
        },
      );
    }
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
