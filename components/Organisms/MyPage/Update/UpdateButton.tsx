import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import {
  UserModifyInfo,
  UserModifyErrorInfo,
  UserModifyInfoInterface,
  UserModifyAlertInterface,
} from 'states/user-modify-info';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

const validate = (
  { email, phoneNumber, name }: UserModifyInfoInterface,
  setError: (a: UserModifyInfoInterface) => void,
): boolean => {
  let hasError: boolean = false;
  const errorSet: UserModifyAlertInterface = {};

  if (!(name && name.length >= 1)) {
    hasError = true;
    errorSet.nameMessage = '닉네임을 올바르게 입력해주세요.';
  }

  if (!email || (email && !validateEmail(email))) {
    hasError = true;
    errorSet.emailMessage = '이메일을 올바르게 입력해주세요.';
  }

  if (
    !phoneNumber ||
    !(
      typeof phoneNumber === 'string' &&
      10 <= phoneNumber.length &&
      phoneNumber.length <= 11
    )
  ) {
    hasError = true;
    errorSet.phoneNumberMessage = '휴대폰 번호를 올바르게 입력해주세요.';
  }

  setError(errorSet);
  return !hasError;
};

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export default function UpdateButton() {
  const router = useRouter();
  const userModifyValue = useRecoilValue(UserModifyInfo);
  const setUserModifyError = useSetRecoilState(UserModifyErrorInfo);
  const axiosState = customAxios();
  const update = async () => {
    if (validate(userModifyValue, setUserModifyError)) {
      try {
        await axiosState({
          url: `/api/user`,
          method: 'POST',
          data: userModifyValue,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const serverError = error?.response?.data as UserModifyAlertInterface;
          setUserModifyError(serverError);
          return;
        }
      }

      router.push(`/mypage?redirect=${router.asPath}`);
    }
  };

  useEffect(() => setUserModifyError({}), [setUserModifyError]);

  return (
    <Box
      marginTop="60px"
      marginBottom="80px"
      backgroundColor={theme.colors.black}
      color={theme.colors.white}
      paddingY="15px"
      fontSize="16px"
      fontWeight={500}
      lineHeight={1.5}
      textAlign="center"
      onClick={() => update()}
    >
      저장하기
    </Box>
  );
}
