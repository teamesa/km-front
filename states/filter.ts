import { atom } from 'recoil';

export type FilterState = {
  filterOptions: filterOptionsInterface;
  queryString: '';
  requestPagingStatus: {
    currentContentsCount: number;
    pageNumber: number;
    pageSize: number;
  };
  searchSortType: string;
};

export type filterOptionsInterface = {
  exhibitionType: string;
  feeTypes: SelectInterface[] | [];
  progressTypes: SelectInterface[] | [];
  regionTypes: SelectInterface[] | [];
};

export interface SelectInterface {
  index: number;
  label: string;
  value: string;
  status: boolean;
  group: 'feeTypes' | 'progressTypes' | 'regionTypes';
}

export const makeEmtpyFilterOption = (
  exPostFilter: FilterState,
): FilterState => ({
  ...exPostFilter,
  filterOptions: {
    ...exPostFilter.filterOptions,
    feeTypes: [],
    progressTypes: [],
    regionTypes: [],
  },
});

export const defaultSearchRequset: FilterState = {
  filterOptions: {
    exhibitionType: 'ALL',
    feeTypes: [],
    progressTypes: [],
    regionTypes: [],
  },
  queryString: '',
  requestPagingStatus: {
    currentContentsCount: 0,
    pageNumber: 0,
    pageSize: 100,
  },
  searchSortType: 'ENROLL_DESC',
};

export const searchRequest = atom<FilterState>({
  key: 'SearchRequest',
  default: defaultSearchRequset,
});
