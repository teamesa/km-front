import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import {
  UserModifyInfo,
  UserModifyErrorInfo,
  UserModifyInfoInterface,
} from 'states/user-modify-info';
import theme from 'styles/theme';

const validate = (
  { email }: UserModifyInfoInterface,
  setError: (a: UserModifyInfoInterface) => void,
) => {
  if (email && !validateEmail(email)) {
    setError({ email: '이메일을 올바르게 입력해주세요.' });
  } else {
    setError({});
  }
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
      onClick={() => validate(userModifyValue, setUserModifyError)}
    >
      저장하기
    </Box>
  );
}
