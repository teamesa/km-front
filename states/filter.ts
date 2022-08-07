import { atom, selector } from 'recoil';

import { searchRequest, SearchRequestInterface } from 'states/search-request';

export interface SearchFilterSelectGroup {
  feeTypes: SelectInterface[] | [];
  progressTypes: SelectInterface[] | [];
  regionTypes: SelectInterface[] | [];
}

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

export interface SelectInterface {
  index: number;
  label: string;
  value: string;
  status: boolean;
  group: 'feeTypes' | 'progressTypes' | 'regionTypes';
}

const filterByStatus = (filterArray: SelectInterface[]): string[] =>
  filterArray.filter((it) => it.status).map((it) => it.value);

export const makeRequestFilterOptionBySearchFilterSelectGroup = (
  selectGroup: SearchFilterSelectGroup,
  searchRequest: SearchRequestInterface,
): SearchRequestInterface => ({
  ...searchRequest,
  filterOptions: {
    exhibitionType: searchRequest.filterOptions.exhibitionType,
    feeTypes: filterByStatus(selectGroup.feeTypes),
    progressTypes: filterByStatus(selectGroup.progressTypes),
    regionTypes: filterByStatus(selectGroup.regionTypes),
  },
});

export const makeEmtpyFilterOption = (): SearchFilterSelectGroup => ({
  feeTypes: [],
  progressTypes: [],
  regionTypes: [],
});

const makeFilterStringToSelectInterface = (
  filterString: string,
): SelectInterface =>
  [...filterType[0].type, ...filterType[1].type, ...filterType[2].type]
    .filter((it) => it.value === filterString)
    .map((selectInterface) => {
      return { ...selectInterface, status: true };
    })?.[0];

export const makeRequestToFilters = ({
  filterOptions: { feeTypes, regionTypes, progressTypes },
}: SearchRequestInterface): SearchFilterSelectGroup => ({
  feeTypes: feeTypes.map(makeFilterStringToSelectInterface),
  regionTypes: regionTypes.map(makeFilterStringToSelectInterface),
  progressTypes: progressTypes.map(makeFilterStringToSelectInterface),
});

export const filter = atom<SearchFilterSelectGroup>({
  key: 'searchFilter',
  default: selector({
    key: 'searchFilter/default',
    get: async ({ get }) => makeRequestToFilters(get(searchRequest)),
  }),
});

export const setFilterState = atom<boolean>({
  key: 'setFilterState',
  default: false,
});
