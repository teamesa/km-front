import Image from 'next/image';

import Logo from 'assets/common/header/logo.png';
import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function Introdeuce() {
  const nameRole = ({ role, name }: { role: string; name: string }) => {
    return (
      <Box paddingBottom="40px">
        <Box color={theme.colors.gray66} fontSize="15px">
          {role}
        </Box>
        <Box color={theme.colors.black} fontSize="14px" paddingTop="8px">
          {name}
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box paddingTop="15px">
        <Image src={Logo} alt="image" width="122px" height="20px" />
        <Box paddingTop="16px" fontSize="19px">
          당신의 문화생활 로드맵
        </Box>
        <Box paddingTop="5px" color={theme.colors.grayBB} fontSize="13px">
          Roadmap to your cultural life
        </Box>
      </Box>
      <Box
        marginTop="40px"
        padding="40px 25px 0"
        background={theme.colors.grayF9}
      >
        {nameRole({ role: 'Service Planning', name: '김세영' })}
        {nameRole({ role: 'Design', name: '이유정' })}
        {nameRole({ role: 'Tech Lead', name: '이정훈' })}
        {nameRole({ role: 'Backend Engineer', name: '이찬희 이동호' })}
        {nameRole({ role: 'Frontend Engineer', name: '김한솔 김민혜 한정아' })}
      </Box>
    </>
  );
}
