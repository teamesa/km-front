import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Tag, Span, Button } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { ArchiveLike } from 'constants/type/api';
import { AlertState, PopupNameState } from 'states';
import { User } from 'states/user';
import theme from 'styles/theme';
import { useArchiveQuery } from 'api/v1/queryHooks/archive';
import { useHomeQuery } from 'api/v1/queryHooks/home';

export default function ArchiveHeart({
  id,
  heart,
  likeCount,
}: {
  id: number;
  heart: ArchiveLike;
  likeCount: number;
}) {
  const router = useRouter();
  const loginState = useRecoilValue(User);
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);

  const { useGetItemsArchivesById, usePutArchivesLike } = useArchiveQuery();
  const { refetch: archivesByIdRefetch } = useGetItemsArchivesById({
    id: Number(router.query.id),
    sortType: 'MODIFY_DESC',
  });
  const { mutate: putLike } = usePutArchivesLike();

  const { useGetHome } = useHomeQuery();
  const { refetch: homeRefetch } = useGetHome();

  const onClickArhciveLike = async () => {
    if (!loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
      return null;
    } else {
      putLike(
        {
          id,
          body: !heart?.heartClicked,
        },
        {
          onSuccess: () => {
            if (router.query.id) {
              archivesByIdRefetch();
            }
            homeRefetch();
          },
        },
      );
    }
  };

  return (
    <Button
      onClick={(e) => {
        onClickArhciveLike();
        e.stopPropagation();
      }}
    >
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
