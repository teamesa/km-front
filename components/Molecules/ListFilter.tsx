import { Box } from 'components/Atoms';
import ListOptionFilter from 'components/Organisms/List/ListOptionFilter';
import ListSortFilter from 'components/Organisms/List/ListSortFilter';

const sortType = [
  { index: 0, label: '등록순', value: 'ENROLL_DESC' },
  { index: 1, label: '종료임박순', value: 'END_DATE_ASC' },
  { index: 2, label: '하트PICK순', value: 'HEART_DESC' },
  { index: 2, label: '별점순', value: 'GRADE_DESC' },
];

export default function ListFilter() {
  return (
    <>
      <Box flex={1}>
        <ListSortFilter
          modalType="Select"
          data={sortType}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </Box>
      <Box flex={1}>
        <ListOptionFilter
          modalType="Select"
          data={sortType}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </Box>
    </>
  );
}
