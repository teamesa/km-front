import Filter from 'assets/list/Filter';
import { Box, Button } from 'components/Atoms';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function ListOptionFilter() {
  const { onModal } = useModal();
  return (
    <Button
      type="button"
      position="relative"
      padding="0px 20px"
      width="100%"
      fontWeight={400}
      fontSize="12px"
      lineHeight="38px"
      textAlign="left"
      background={theme.colors.white}
      border={`1px solid ${theme.colors.grayDD}`}
      borderRight="none"
      borderLeft="none"
      onClick={() => {
        onModal({
          type: `Filter`,
        });
      }}
    >
      상세필터
      <Box position="absolute" top="0" right="20px" width="14px" height="38px">
        <Filter width="100%" height="100%" />
      </Box>
    </Button>
  );
}
