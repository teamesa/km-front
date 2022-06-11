import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Box, Input, RadioInput, RadioLabel } from 'components/Atoms';
import UpdateInputAlert from 'components/Organisms/MyPage/Update/UpdateInputAlert';
import {
  UpdateType,
  UserModifyInfo,
  UserModifyInfoInterface,
} from 'states/user-modify-info';
import theme from 'styles/theme';

interface UpdateInputSetProps {
  type: UpdateType;
  labelText: string;
}

const getInputType = (
  type: UpdateType,
): 'text' | 'tel' | 'number' | 'radio' | 'email' | 'date' => {
  switch (type) {
    case 'phoneNumber':
      return 'tel';
    case 'gender':
      return 'radio';
    case 'birthDay':
      return 'date';
    case 'email':
      return 'email';
    case 'name':
    default:
      return 'text';
  }
};

const makeNewValue = (
  value: string,
  exState: UserModifyInfoInterface,
  type: UpdateType,
): UserModifyInfoInterface => {
  switch (type) {
    case 'phoneNumber':
      return { ...exState, phoneNumber: value };
    case 'gender':
      return { ...exState, gender: value };
    case 'birthDay':
      return { ...exState, birthDay: value };
    case 'email':
      return { ...exState, email: value };
    case 'name':
      return { ...exState, name: value };
    default:
      return { ...exState };
  }
};

export default function UpdateInputSet({
  type,
  labelText,
}: UpdateInputSetProps) {
  const userModifyInfo = useRecoilValue(UserModifyInfo);
  const value: string =
    Object.entries(userModifyInfo)
      .filter(([key, _]) => key === type)
      .map(([_, val]) => val)
      .map((val) => val.toString())
      .shift() || '';

  const setUserModifyInfo = useSetRecoilState(UserModifyInfo);

  return (
    <Box marginTop="40px" width="100%">
      <Box
        fontSize="13px"
        lineHeight={1.54}
        textAlign="left"
        color={theme.colors.black}
        marginBottom="10px"
      >
        {labelText}
      </Box>
      {type === 'gender' ? (
        <Box>
          <RadioInput
            type="radio"
            name="gender"
            id="FEMALE"
            value="FEMAIL"
            onChange={(e) =>
              setUserModifyInfo((exValue) =>
                makeNewValue(e.target.value, exValue, type),
              )
            }
            checked={value !== 'MALE'}
          />
          <RadioLabel htmlFor="female">여성</RadioLabel>
          <RadioInput
            type="radio"
            name="gender"
            id="MALE"
            value="MALE"
            onChange={(e) =>
              setUserModifyInfo((exValue) =>
                makeNewValue(e.target.value, exValue, type),
              )
            }
            checked={value === 'MALE'}
          />
          <RadioLabel htmlFor="male">남성</RadioLabel>
        </Box>
      ) : (
        <Input
          placeholder="입력해주세요"
          type={getInputType(type)}
          value={value}
          onChange={(e) =>
            setUserModifyInfo((exValue) =>
              makeNewValue(e.target.value, exValue, type),
            )
          }
        />
      )}
      <UpdateInputAlert type={type} />
    </Box>
  );
}
