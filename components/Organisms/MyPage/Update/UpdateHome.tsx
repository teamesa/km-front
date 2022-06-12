import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import UpdateButton from 'components/Organisms/MyPage/Update/UpdateButton';
import UpdateInputSet from 'components/Organisms/MyPage/Update/UpdateInputSet';
import { UserModifyInfo } from 'states/user-modify-info';
import { UserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function UpdateHome({
  user: { name, phoneNumber, birthdate, gender, email },
}: UserProps) {
  useInitHeader({
    headerLeft: 'default',
    headerRight: 'search',
    title: '회원정보 수정',
  });
  const setModifiedUserInfo = useSetRecoilState(UserModifyInfo);

  const birthDayFormat = new Date(birthdate).toISOString().substring(0, 10);
  const phoneNumberFormat = phoneNumber.replaceAll('-', '');

  setModifiedUserInfo({
    name,
    email,
    birthDay: birthDayFormat,
    phoneNumber: phoneNumberFormat,
    gender,
  });

  return (
    <Box paddingX="15px">
      <UpdateInputSet type="name" labelText="닉네임" />
      <UpdateInputSet type="phoneNumber" labelText="연락처" />
      <UpdateInputSet type="birthDay" labelText="생일" />
      <UpdateInputSet type="gender" labelText="성별" />
      <UpdateInputSet type="email" labelText="이메일" />
      <UpdateButton />
    </Box>
  );
}
