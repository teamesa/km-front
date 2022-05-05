import type { NextPage } from 'next';
import Image from 'next/image';

import { Box } from 'components/Atoms';
import { useUserProps, UserProps } from 'utils/authentication/useUser';

// 임시 페이지 입니다.

const MyPage: NextPage<UserProps> = ({ user }) => {
  return (
    <Box>
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
  );
};

export const getServerSideProps = useUserProps;
export default MyPage;
