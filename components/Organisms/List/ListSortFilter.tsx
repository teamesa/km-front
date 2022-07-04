import { useRecoilValue } from 'recoil';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, Button } from 'components/Atoms';
import { SelectProps } from 'constants/type/modal';
import { searchRequest } from 'states/filter';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

interface sortTextProps {
  sortText: string;
}

export default function ListSortFilter(
  props: SelectProps,
  { sortText }: sortTextProps,
) {
  const { onModal } = useModal();
  const targetText = useRecoilValue(searchRequest);
  const getSortText = props.data.map((item) => {
    if (targetText.searchSortType === item.value) {
      sortText = item.label;
      return sortText;
    }
  });
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
      {getSortText}
      <Box position="absolute" top="0" right="20px">
        <ArrowDown />
      </Box>
    </Button>
  );
}
