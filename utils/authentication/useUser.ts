import jwt from 'jsonwebtoken';
import { GetServerSideProps } from 'next';

export interface UserProps {
  user: User;
}

export interface URLProps {
  backUrl: string;
}

export interface User {
  name: string;
  email: string;
  gender: string;
  imageUrl: string;
  birthdate: number;
  isLogin: boolean;
}

export const useUserProps: GetServerSideProps<UserProps | URLProps> = async (
  context,
) => {
  const { cookies } = context.req;
  const { kilometer_session } = cookies;

  const user: User = {
    name: '익명의 코다리1번가',
    email: '',
    gender: '',
    imageUrl: '',
    birthdate: 0,
    isLogin: false,
  };

  if (kilometer_session) {
    try {
      const decodeData = jwt.verify(
        kilometer_session,
        process.env.JWT_SIGN as string,
      ) as User;
      user.name = decodeData.name;
      user.email = decodeData.email;
      user.gender = decodeData.gender;
      user.imageUrl = decodeData.imageUrl;
      user.birthdate = decodeData.birthdate;
      user.isLogin = true;
    } catch (err) {
      console.log(err);
    }
  }

  return { props: { user, backUrl: process.env.BACK_URL } };
};
