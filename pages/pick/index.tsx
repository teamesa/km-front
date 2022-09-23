import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import MyPickPage from 'components/Organisms/Pick/MyPickPage';
import PickLogin from 'components/Organisms/Pick/PickLogin';
import { useResetPickStateFunction } from 'states/pick';
import { User } from 'states/user';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Pick() {
  const loginState = useRecoilValue(User);
  const resetPickState = useResetPickStateFunction();

  useEffect(() => {
    resetPickState();
  }, [resetPickState]);


  useInitHeader({
    headerRight: 'search',
    headerLeft: 'disabled',
  });

  useEffect(() => {
    setUserFirst(user);
  }, [user, setUserFirst]);

  if (user.isLogin) {
    return <MyPickPage />;
  } else {
    return <PickLogin />;
  }
};

export const getServerSideProps = useUserProps;
export default Pick;
