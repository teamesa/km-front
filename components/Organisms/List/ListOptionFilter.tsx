import Filter from 'assets/list/Filter';
import { Box, Button } from 'components/Atoms';
import { SelectInterface } from 'states/search-request';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export const filterType: { title: string; type: SelectInterface[] }[] = [
  {
    title: '진행',
    type: [
      {
        index: 0,
        label: 'ON',
        value: 'ON',
        group: 'progressTypes',
        status: false,
      },
      {
        index: 1,
        label: 'OFF',
        value: 'OFF',
        group: 'progressTypes',
        status: false,
      },
      {
        index: 2,
        label: 'UPCOMING',
        value: 'UPCOMING',
        group: 'progressTypes',
        status: false,
      },
    ],
  },
  {
    title: '입장료',
    type: [
      {
        index: 0,
        label: '무료',
        value: 'FREE',
        group: 'feeTypes',
        status: false,
      },
      {
        index: 1,
        label: '유료',
        value: 'COST',
        group: 'feeTypes',
        status: false,
      },
    ],
  },
  {
    title: '지역',
    type: [
      {
        index: 0,
        label: '서울',
        value: 'SEOUL',
        group: 'regionTypes',
        status: false,
      },
      {
        index: 1,
        label: '경기',
        value: 'GYEONGGI',
        group: 'regionTypes',
        status: false,
      },
      {
        index: 2,
        label: '강원',
        value: 'GANGWON',
        group: 'regionTypes',
        status: false,
      },
      {
        index: 3,
        label: '충청',
        value: 'CHUNGCHEONG',
        group: 'regionTypes',
        status: false,
      },
      {
        index: 4,
        label: '경상',
        value: 'GYEONGSANG',
        group: 'regionTypes',
        status: false,
      },
      {
        index: 5,
        label: '전라',
        value: 'JEOLLA',
        group: 'regionTypes',
        status: false,
      },
      {
        index: 6,
        label: '제주',
        value: 'JEJU',
        group: 'regionTypes',
        status: false,
      },
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
