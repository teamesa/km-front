import { Box } from 'components/Atoms';
import ListOptionFilter from 'components/Organisms/List/ListOptionFilter';
import ListSortFilter from 'components/Organisms/List/ListSortFilter';

const sortType = [
  { index: 0, label: '등록순', value: 'ENROLL_DESC' },
  { index: 1, label: '종료임박순', value: 'END_DATE_ASC' },
  { index: 2, label: '하트PICK순', value: 'HEART_DESC' },
  { index: 3, label: '별점순', value: 'GRADE_DESC' },
];

const filterType = [
  {
    title: '진행',
    type: [
      { index: 0, label: 'ON', value: 'ON' },
      { index: 1, label: 'OFF', value: 'OFF' },
      { index: 2, label: 'UPCOMING', value: 'UPCOMING' },
    ],
  },
  {
    title: '입장료',
    type: [
      { index: 0, label: '무료', value: 'FREE' },
      { index: 1, label: '유료', value: 'COST' },
    ],
  },
  {
    title: '입장료',
    type: [
      { index: 0, label: '서울', value: 'SEOUL' },
      { index: 1, label: '경기', value: 'GYEONGGI' },
      { index: 1, label: '강원', value: 'GANGWON' },
      { index: 1, label: '충청', value: 'CHUNGCHEONG' },
      { index: 1, label: '경상', value: 'GYEONGSANG' },
      { index: 1, label: '전라', value: 'JEOLLA' },
      { index: 1, label: '제주', value: 'JEJU' },
    ],
  },
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
          modalType="Filter"
          data={filterType}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </Box>
    </>
  );
}
