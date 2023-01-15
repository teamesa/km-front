import { NextPage } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import MyPickPage from 'components/Organisms/Pick/MyPickPage';
import PickLogin from 'components/Organisms/Pick/PickLogin';
import { User } from 'states/user';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Pick: NextPage<UserProps> = ({ user }) => {
  const setUserFirst = useSetRecoilState(User);

  useInitHeader({
    headerRight: 'search',
    headerLeft: 'disabled',
  });

  useEffect(() => {
    setUserFirst(user);
  }, [user, setUserFirst]);

  if (user.isLogin) {
    return <MyPickPage />;
  }
  return <PickLogin />;
};

export const getServerSideProps = useUserProps;
export default Pick;
