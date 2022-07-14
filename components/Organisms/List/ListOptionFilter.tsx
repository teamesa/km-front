import Filter from 'assets/list/Filter';
import { Box, Button } from 'components/Atoms';
import { FilterProps } from 'constants/type/modal';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

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
      <Box position="absolute" top="0" right="20px" width="14px" height="38px">
        <Filter width="100%" height="100%" />
      </Box>
    </Button>
  );
}
