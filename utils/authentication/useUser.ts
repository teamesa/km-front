import { AxiosResponse } from 'axios';
import moment from 'moment';
import { GetServerSideProps } from 'next';

import { makeAnnonymousUser } from 'states/user';
import customAxios from 'utils/hooks/customAxios';

export interface UserProps {
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  imageUrl: string;
  birthdate: string;
  isLogin: boolean;
  phoneNumber: string;
}

export type TGetUserResponse = {
  birthdate: string;
  created: boolean;
  email: string;
  gender: 'FEMAIL' | 'MAIL' | 'UNKNOWN';
  id: number;
  imageUrl: string;
  name: string;
  phoneNumber: string;
  provider: string;
  role: string;
};

export const useUserProps: GetServerSideProps<UserProps> = async (context) => {
  const { cookies } = context.req;
  const { kilometer_session } = cookies;

  const user: User = makeAnnonymousUser();

  if (kilometer_session) {
    try {
      const axios = customAxios();
      const { data } = (await axios({
        url: '/api/user/me',
        method: 'GET',
        headers: {
          Authorization: kilometer_session,
        },
      })) as AxiosResponse<TGetUserResponse>;

      user.id = data.id;
      user.name = data.name;
      user.email = data.email;
      user.imageUrl = data.imageUrl;
      user.gender = data.gender;
      user.birthdate = moment(data.birthdate).format('YYYY-MM-DD');
      user.phoneNumber = data.phoneNumber;
      user.isLogin = true;
    } catch (err) {
      console.log(err);
    }
  }

  return { props: { user } };
};
