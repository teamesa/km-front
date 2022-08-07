import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Box, Span } from 'components/Atoms';
import ListItems from 'components/Atoms/ListItems';
import theme from 'styles/theme';

export default function ConfigurationFragment() {
  const router = useRouter();

  return (
    <Box padding="40px 0px">
      <Box
        marginBottom="30px"
        fontSize="15px"
        fontWeight={500}
        lineHeight="19px"
        color={theme.colors.black}
        onClick={() => router.push('/mypage/update')}
      >
        회원정보 수정
      </Box>
      <Box
        marginBottom="30px"
        fontSize="15px"
        fontWeight={500}
        lineHeight="19px"
        color={theme.colors.black}
        onClick={() => router.push('/api/logout')}
      >
        로그아웃
      </Box>
      <Box marginTop="60px">
        <ul>
          <ListItems
            position="relative"
            paddingLeft="7px"
            fontSize="13px"
            lineHeight="18px"
            color={theme.colors.gray99}
            css={css`
              &:before {
                content: '';
                position: absolute;
                left: 0px;
                top: 8px;
                width: 2px;
                height: 2px;
                background: #999;
              }
            `}
          >
            문의사항이 있으실 경우 <br />
            <Span
              css={css`
                text-decoration: underline;
              `}
            >
              kilometerservice@gmail.com
            </Span>{' '}
            로 연락주세요.
          </ListItems>
        </ul>
      </Box>
    </Box>
  );
}
