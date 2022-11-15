import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { DeleteBtn } from 'assets/search/DeleteBtn';
import { Box, FlexBox } from 'components/Atoms';
import { recentKeywords } from 'states/search';
import theme from 'styles/theme';

export default function RecentSearch() {
  const router = useRouter();
  const [localStorageKeywords, setlocalStorageKeywords] =
    useRecoilState(recentKeywords);

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
      >
        전체삭제
      </Box>
      {localStorageKeywords?.length > 0 ? (
        localStorageKeywords.map((keyword, index) => (
          <FlexBox
            key={index}
            marginTop="15px"
            fontSize="13px"
            fontWeight="400"
          >
            <Box
              flex="1 1 calc(100% - 8px)"
              onClick={() => {
                router.push({
                  pathname: '/search/result',
                  query: { keyword },
                });
              }}
            >
              {keyword}
            </Box>
            <Box flex="0 0 8px">
              <DeleteBtn />
            </Box>
          </FlexBox>
        ))
      ) : (
        <Box marginTop="15px" fontSize="13px">
          최근 검색어 내역이 없습니다.
        </Box>
      )}
    </Box>
  );
}
