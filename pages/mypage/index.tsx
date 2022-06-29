import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import LoginPage from 'components/Organisms/MyPage/LoginPage';
import MyPageHome from 'components/Organisms/MyPage/MyPageHome';
import { User } from 'states/user';
import { useUserProps, UserProps } from 'utils/authentication/useUser';

const MyPage: NextPage<UserProps> = ({ user }) => {
  const setUserFirst = useSetRecoilState(User);

  useEffect(() => {
    setUserFirst(user);
  }, []);

  if (user.isLogin) {
    return <MyPageHome />;
  } else {
    return <LoginPage />;
  }
};

export const getServerSideProps = useUserProps;
export default MyPage;
