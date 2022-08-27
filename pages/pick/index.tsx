import { useRecoilValue } from 'recoil';

import MyPickPage from 'components/Organisms/Pick/MyPickPage';
import PickLogin from 'components/Organisms/Pick/PickLogin';
import { User } from 'states/user';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Pick() {
  const loginState = useRecoilValue(User);

  useInitHeader({
    headerRight: 'search',
    headerLeft: 'disabled',
  });

  if (loginState.isLogin) {
    return <MyPickPage />;
  } else {
    return <PickLogin />;
  }
}
