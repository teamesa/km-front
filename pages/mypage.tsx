import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Box, Button } from 'components/Atoms';
import LoginPage from 'components/Organisms/MyPage/LoginPage';
import { useUserProps, UserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

// 임시 페이지 입니다.

const MyPage: NextPage<UserProps> = ({ user }) => {
  const router = useRouter();
  useInitHeader({ headerLeft: 'disabled', headerRight: 'disabled' });
  if (user.isLogin) {
    return (
      <Box>
        로그인 유저
        <Button onClick={() => router.push('/api/logout')}>logout</Button>
      </Box>
    );
  } else {
    return <LoginPage />;
  }
};

export const getServerSideProps = useUserProps;
export default MyPage;
