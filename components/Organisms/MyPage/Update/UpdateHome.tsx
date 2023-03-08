import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import UpdateButton from 'components/Organisms/MyPage/Update/UpdateButton';
import UpdateInputSet from 'components/Organisms/MyPage/Update/UpdateInputSet';
import { UserModifyInfo } from 'states/user-modify-info';
import { UserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function UpdateHome({
  user: { id, name, phoneNumber, birthdate, gender, email },
}: UserProps) {
  const router = useRouter();
  useInitHeader({
    headerLeft: 'default',
    headerRight: 'disabled',
    title: '회원정보 수정',
    headerLeftAction: () => router.back(),
    headerRightAction: () => {},
  });
  const setModifiedUserInfo = useSetRecoilState(UserModifyInfo);

  const phoneNumberFormat = phoneNumber.replaceAll('-', '');

  useEffect(
    () =>
      setModifiedUserInfo({
        id,
        name,
        email,
        birthDay: birthdate,
        phoneNumber: phoneNumberFormat,
        gender,
      }),
    [
      setModifiedUserInfo,
      id,
      name,
      phoneNumber,
      birthdate,
      gender,
      email,
      phoneNumberFormat,
    ],
  );

  return (
    <Box padding="0px 15px 40px">
      <UpdateInputSet type="name" labelText="닉네임" />
      <UpdateInputSet type="phoneNumber" labelText="휴대폰번호" />
      <UpdateInputSet type="birthDay" labelText="생일" />
      <UpdateInputSet type="gender" labelText="성별" />
      <UpdateInputSet type="email" labelText="이메일" />
      <UpdateButton />
    </Box>
  );
}
