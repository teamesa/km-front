import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { color } from 'styled-system';

import { Box, Button } from 'components/Atoms';
import { useUserProps, UserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

// 임시 페이지 입니다.

const MyPage: NextPage<UserProps> = ({ user }) => {
  const router = useRouter();
  useInitHeader({ headerLeft: 'disabled' });
  return (
    <>
      <Box marginBottom={4}>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <Image
          src={
            user.imageUrl
              ? user.imageUrl
              : 'https://ssl.pstatic.net/static/pwe/address/img_profile.png'
          }
          alt="Landscape picture"
          width={50}
          height={50}
        />
        <div>{user.gender}</div>
        <div>{user.birthdate}</div>
      </Box>
      <Button
        width="100%"
        backgroundColor={'#99CCFF'}
        fontWeight={400}
        fontSize="17px"
        padding={2}
        textAlign="center"
        marginBottom={2}
        onClick={() => router.push('/api/login')}
      >
        Login
      </Button>
      <Button
        width="100%"
        fontWeight={400}
        backgroundColor={'#99CCFF'}
        fontSize="17px"
        padding={2}
        textAlign="center"
        onClick={() => router.push('/api/logout')}
      >
        Logout
      </Button>
    </>
  );
};

export const getServerSideProps = useUserProps;
export default MyPage;
