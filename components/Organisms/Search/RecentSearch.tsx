import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { DeleteBtn } from 'assets/search/DeleteBtn';
import { Box } from 'components/Atoms';
import { recentKeywords } from 'states/search';
import theme from 'styles/theme';

export default function RecentSearch() {
  const router = useRouter();
  const [localStorageKeywords, setlocalStorageKeywords] =
    useRecoilState(recentKeywords);

  const deleteTargetRecentKeyword = (index: number) => {
    setlocalStorageKeywords([
      ...localStorageKeywords.slice(0, index),
      ...localStorageKeywords.slice(index + 1, 5),
    ]);
  };

  return (
    <Box paddingBottom="60px">
      <Box
        marginBottom="5px"
        fontSize="15px"
        lineHeight="22px"
        fontWeight="500"
      >
        최근 검색어
      </Box>
      <Box
        position="absolute"
        top="0px"
        right="15px"
        fontSize="12px"
        color={theme.colors.grayAA}
        lineHeight="22px"
        onClick={() => {
          setlocalStorageKeywords([]);
        }}
      >
        전체삭제
      </Box>
      {localStorageKeywords?.length > 0 ? (
        localStorageKeywords.map((keyword, index) => (
          <Box
            key={index}
            position="relative"
            marginTop="15px"
            fontSize="13px"
            fontWeight="400"
            lineHeight="22px"
          >
            <Box
              width="calc(100% - 52px)"
              css={css`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              `}
              onClick={() => {
                router.push({
                  pathname: '/search/result',
                  query: { keyword },
                });
              }}
            >
              {keyword}
            </Box>
            <Box
              position="absolute"
              top="0px"
              right="0px"
              marginRight="-10px"
              width="22px"
              height="22px"
              onClick={() => {
                deleteTargetRecentKeyword(index);
              }}
            >
              <DeleteBtn />
            </Box>
          </Box>
        ))
      ) : (
        <Box marginTop="15px" fontSize="13px">
          최근 검색어 내역이 없습니다.
        </Box>
      )}
    </Box>
  );
}
