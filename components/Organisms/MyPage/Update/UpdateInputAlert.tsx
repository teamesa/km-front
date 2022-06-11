import { useRecoilValue } from 'recoil';

import { Box } from 'components/Atoms';
import { UpdateType, UserModifyErrorInfo } from 'states/user-modify-info';
import theme from 'styles/theme';

interface UpdateInputAlertProps {
  type: UpdateType;
}

export default function UpdateInputAlert({ type }: UpdateInputAlertProps) {
  const userModifyInfo = useRecoilValue(UserModifyErrorInfo);
  const value: string =
    Object.entries(userModifyInfo)
      .filter(([key, _]) => key === type)
      .map(([_, val]) => val)
      .map((val) => val.toString())
      .shift() || '';

  if (value === '') {
    return <></>;
  } else {
    return (
      <Box
        fontFamily="SpoqaHanSansNeo"
        marginTop="10px"
        fontSize="12px"
        fontWeight="normal"
        fontStyle="normal"
        lineHeight={1.67}
        letterSpacing="normal"
        textAlign="left"
        color={theme.colors.orange}
      >
        {value}
      </Box>
    );
  }
}
