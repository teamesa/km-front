import { useRouter } from 'next/router';

import { Box, Input, RadioInput, RadioLabel } from 'components/Atoms';
import theme from 'styles/theme';
import { UserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function UpdateHome({
  user: { name, phoneNumber, birthdate, gender, email },
}: UserProps) {
  const router = useRouter();
  useInitHeader({
    headerLeft: 'default',
    headerRight: 'search',
    title: '회원정보 수정',
  });

  const birthDayFormat = new Date(birthdate)
    .toISOString()
    .substring(0, 10)
    .replaceAll('-', '');
  const phoneNumberFormat = phoneNumber.replaceAll('-', '');
  const genderFormat = gender !== 'MALE';

  return (
    <Box paddingLeft={'15px'} paddingRight={'15px'}>
      <Box marginTop="40px" width="100%">
        <Box
          fontFamily="SpoqaHanSansNeo"
          fontSize="13px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight="normal"
          lineHeight={1.54}
          textAlign={'left'}
          color={theme.colors.black}
          marginBottom="10px"
        >
          닉네임
        </Box>
        <Input placeholder="입력해주세요" value={name} />
      </Box>
      <Box marginTop="30px" width="100%">
        <Box
          fontFamily="SpoqaHanSansNeo"
          fontSize="13px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight="normal"
          lineHeight={1.54}
          textAlign={'left'}
          color={theme.colors.black}
          marginBottom="10px"
        >
          연락처
        </Box>
        <Input
          placeholder="입력해주세요"
          value={phoneNumberFormat}
          type="number"
        />
      </Box>
      <Box marginTop="30px" width="100%">
        <Box
          fontFamily="SpoqaHanSansNeo"
          fontSize="13px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight="normal"
          lineHeight={1.54}
          textAlign={'left'}
          color={theme.colors.black}
          marginBottom="10px"
        >
          생일
        </Box>
        <Input
          placeholder="입력해주세요"
          type="number"
          value={birthDayFormat}
          maxLength={8}
        />
      </Box>
      <Box marginTop="30px" width="100%">
        <Box
          fontFamily="SpoqaHanSansNeo"
          fontSize="13px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight="normal"
          lineHeight={1.54}
          textAlign={'left'}
          color={theme.colors.black}
          marginBottom="10px"
        >
          성별
        </Box>
        <Box>
          <RadioInput
            type="radio"
            name="gender"
            id="female"
            checked={genderFormat}
          />
          <RadioLabel htmlFor="female">여성</RadioLabel>
          <RadioInput
            type="radio"
            name="gender"
            id="male"
            checked={!genderFormat}
          />
          <RadioLabel htmlFor="male">남성</RadioLabel>
        </Box>
      </Box>
      <Box marginTop="30px" width="100%">
        <Box
          fontFamily="SpoqaHanSansNeo"
          fontSize="13px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight="normal"
          lineHeight={1.54}
          textAlign={'left'}
          color={theme.colors.black}
          marginBottom="10px"
        >
          이메일
        </Box>
        <Input placeholder="입력해주세요" type="email" value={email} />
      </Box>
      <Box
        marginTop="60px"
        backgroundColor={theme.colors.black}
        color={theme.colors.white}
        paddingY="15px"
        fontFamily="SpoqaHanSansNeo"
        fontSize="16px"
        fontWeight={500}
        fontStyle="normal"
        lineHeight={1.5}
        letterSpacing="normal"
        textAlign="center"
      >
        저장하기
      </Box>
    </Box>
  );
}
