import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilRefresher_UNSTABLE,
} from 'recoil';

import { customKmAxios } from 'api/customKmAxios';
import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Tag, Span, Button } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { ArchiveLike, LikeResponse } from 'constants/type/api';
import { AlertState, PopupNameState } from 'states';
import { detailState } from 'states/detail';
import { User } from 'states/user';
import theme from 'styles/theme';

export default function ArchiveHeart({
  heart,
  likeCount,
}: {
  heart: ArchiveLike;
  likeCount: number;
}) {
  const router = useRouter();
  const loginState = useRecoilValue(User);
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const refreshDetailState = useRecoilRefresher_UNSTABLE(
    detailState(Number(router.query.id)),
  );

  const onClickArhciveLike = async () => {
    if (!loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
      return null;
    }
    try {
      const axiosData = (await customKmAxios({
        url: decodeURIComponent(`${heart.link}${!heart.heartClicked}`),
        method: 'PUT',
      })) as AxiosResponse<LikeResponse>;
      if (axiosData.data.content !== undefined) {
      }
    } catch (error) {
      setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
      setPopupName(POPUP_NAME.ALERT_CONFIRM);
    }
    refreshDetailState();
  };

  return (
    <Button onClick={onClickArhciveLike}>
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
        <Span marginLeft="4px">{likeCount}</Span>
      </Tag>
    </Button>
  );
}
