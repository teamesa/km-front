import { FontCancel } from 'assets/archive/FontCancel';
import { Search } from 'assets/archive/Search';
import { Box, Button, FlexBox, Input } from 'components/Atoms';
import theme from 'styles/theme';

export default function SearchTitle() {
  return (
    <Box fontSize="13px" marginTop="40px" paddingBottom="30px">
      다녀온 문화생활을 검색해주세요.
      <FlexBox
        marginTop="10px"
        border={`solid 1px ${theme.colors.grayDD}`}
        padding="12px 15px 11px"
      >
        <Input type="search" placeholder="입력해주세요" width="100%" />
        <Button height="17px">
          <Search />
        </Button>
      </FlexBox>
    </Box>
  );
}
