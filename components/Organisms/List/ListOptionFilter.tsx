import Filter from 'assets/list/Filter';
import { Box, Button } from 'components/Atoms';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

const filterType = [
  {
    title: '진행',
    list: [
      { index: 0, label: 'ON', value: 'ON', type: 'progressTypes' },
      { index: 1, label: 'OFF', value: 'OFF', type: 'progressTypes' },
      { index: 2, label: 'UPCOMING', value: 'UPCOMING', type: 'progressTypes' },
    ],
  },
  {
    title: '입장료',
    list: [
      { index: 0, label: '무료', value: 'FREE', type: 'feeTypes' },
      { index: 1, label: '유료', value: 'COST', type: 'feeTypes' },
    ],
  },
  {
    title: '지역',
    list: [
      { index: 0, label: '서울', value: 'SEOUL', type: 'regionTypes' },
      { index: 1, label: '경기', value: 'GYEONGGI', type: 'regionTypes' },
      { index: 2, label: '강원', value: 'GANGWON', type: 'regionTypes' },
      { index: 3, label: '충청', value: 'CHUNGCHEONG', type: 'regionTypes' },
      { index: 4, label: '경상', value: 'GYEONGSANG', type: 'regionTypes' },
      { index: 5, label: '전라', value: 'JEOLLA', type: 'regionTypes' },
      { index: 6, label: '제주', value: 'JEJU', type: 'regionTypes' },
    ],
  },
];

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
      borderLeft="none"
      onClick={() => {
        onModal({
          type: `Filter`,
          payload: { data: filterType },
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
