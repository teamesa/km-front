import type { NextPage } from 'next';

import LoginPage from 'components/Organisms/MyPage/LoginPage';
import MyPageHome from 'components/Organisms/MyPage/MyPageHome';
import { useUserProps, UserProps } from 'utils/authentication/useUser';

// 임시 페이지 입니다.

const MyPage: NextPage<UserProps> = ({ user }) => {
  if (user.isLogin) {
    return <MyPageHome user={user} />;
  } else {
    return <LoginPage />;
  }
};

export const getServerSideProps = useUserProps;
export default MyPage;
