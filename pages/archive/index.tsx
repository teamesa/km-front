import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import ArchiveHome from 'components/Organisms/Archive/ArchiveHome';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import { User } from 'states/user';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Archive() {
  const router = useRouter();
  const loginState = useRecoilValue(User);
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);

  useEffect(() => {
    if (!loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.LOGIN_CONFIRMATION);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
    }
  }, [loginState, loginState.isLogin, router, setAlertState, setPopupName]);

  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 기록하기',
    headerRight: 'disabled',
    headerLeftAction: () => router.push('/mypage'),
  });

  return (
    <Box padding="0 15px" background={theme.colors.white}>
      <ArchiveHome />
      <Box height="60px" />
    </Box>
  );
}
