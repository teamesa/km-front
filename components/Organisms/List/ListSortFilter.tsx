import { useRecoilValue } from 'recoil';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, Button } from 'components/Atoms';
import { SelectProps } from 'constants/type/modal';
import { searchRequest } from 'states/filter';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

const sortType = [
  { index: 0, label: '등록순', value: 'ENROLL_DESC' },
  { index: 1, label: '종료임박순', value: 'END_DATE_ASC' },
  { index: 2, label: '하트PICK순', value: 'HEART_DESC' },
  { index: 3, label: '별점순', value: 'GRADE_DESC' },
];

export default function ListSortFilter() {
  const { onModal } = useModal();
  const targetText = useRecoilValue(searchRequest);
  const getSortText = sortType.map((item) => {
    if (targetText.searchSortType === item.value) {
      const sortText = item.label;
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
          type: 'Select',
          payload: { data: sortType },
        });
      }}
    >
      {getSortText}
      <Box position="absolute" top="0" right="20px" width="12px" height="38px">
        <ArrowDown width="100%" height="100%" />
      </Box>
    </Button>
  );
}
