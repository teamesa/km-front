import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import theme from 'styles/theme';

const ListItem = styled.li`
  &:before {
    content: '·';
    font-size: 20px;
    vertical-align: middle;
    line-height: 20px;
    padding-right: 5px;
  }
`;

export default function ConfigurationFragment() {
  const router = useRouter();

  return (
    <Box>
      <Box paddingX="15px">
        <Box
          marginTop="10px"
          paddingY="15px"
          fontFamily="SpoqaHanSansNeo"
          fontSize="15px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight={500}
          lineHeight={1.47}
          textAlign={'left'}
          color={theme.colors.black}
          onClick={() => router.push('/mypage/update')}
        >
          회원정보 수정
        </Box>
        <Box
          fontFamily="SpoqaHanSansNeo"
          fontSize="15px"
          paddingY="15px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight={500}
          lineHeight={1.47}
          textAlign={'left'}
          color={theme.colors.black}
          onClick={() => router.push('/api/logout')}
        >
          로그아웃
        </Box>
        <Box
          fontFamily="SpoqaHanSansNeo"
          fontSize="13px"
          paddingY="15px"
          fontStyle="normal"
          letterSpacing="normal"
          fontWeight="normal"
          lineHeight={1.54}
          textAlign={'left'}
          color={theme.colors.gray99}
        >
          <ol>
            <ListItem>문의사항이 있으실 경우</ListItem>
          </ol>
          <Box paddingLeft="12px">
            kilometerservice@gmail.com 로 연락주세요.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
