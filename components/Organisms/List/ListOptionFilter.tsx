import Filter from 'assets/list/Filter';
import { Box, Button } from 'components/Atoms';
import { FilterProps } from 'constants/type/modal';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function ListOptionFilter(props: FilterProps) {
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
      borderLeft="none"
      onClick={() => {
        onModal({
          type: `${props.modalType}`,
          payload: props,
        });
      }}
    >
      상세필터
      <Box position="absolute" top="0" right="20px">
        <Filter />
      </Box>
    </Button>
  );
}
