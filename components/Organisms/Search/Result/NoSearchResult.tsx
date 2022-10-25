import { useRecoilValue } from 'recoil';

import Alert from 'assets/error/Alert';
import { Box, Span } from 'components/Atoms';
import { searchRequest } from 'states';
import theme from 'styles/theme';

export default function NoSearchResult() {
  const keyword = useRecoilValue(searchRequest);
  return (
    <Box
      position="fixed"
      top="calc(50% - 110px)"
      left="0px"
      width="100%"
      textAlign="center"
      fontSize="0"
    >
      <Alert width="40px" height="40px" />
      <Box margin="20px 0px 12px" fontSize="13px" lineHeight="20px">
        <Span color={theme.colors.orange}>{`"${keyword.queryString}"`}</Span> 와
        일치하는 검색 결과가 없습니다.
        <br />
        다른 검색어를 입력하시거나
        <br />
        철자와 띄어쓰기를 확인해 주세요.
      </Box>
    </Box>
  );
}
