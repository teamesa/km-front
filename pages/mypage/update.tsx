import type { NextPage } from 'next';

import LoginPage from 'components/Organisms/MyPage/LoginPage';
import UpdateHome from 'components/Organisms/MyPage/Update/UpdateHome';
import { useUserProps, UserProps } from 'utils/authentication/useUser';

// 임시 페이지 입니다.

const UpdatePage: NextPage<UserProps> = ({ user }) => {
  if (user.isLogin) {
    return <UpdateHome user={user} />;
  } else {
    return <LoginPage />;
  }
};

export const getServerSideProps = useUserProps;
export default UpdatePage;
