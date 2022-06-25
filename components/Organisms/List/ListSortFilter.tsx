import ArrowDown from 'assets/list/ArrowDown';
import { Box, Button } from 'components/Atoms';
import { SelectProps } from 'constants/type/modal';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function ListSortFilter(props: SelectProps) {
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
      onClick={() => {
        onModal({
          type: `${props.modalType}`,
          payload: props,
        });
      }}
    >
      조회순
      <Box position="absolute" top="0" right="20px">
        <ArrowDown />
      </Box>
    </Button>
  );
}
