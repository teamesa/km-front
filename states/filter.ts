import { atom } from 'recoil';

export type TPostFilter = {
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
  feeTypes: string[] | [];
  progressTypes: string[] | [];
  regionTypes: string[] | [];
};

export const defaultSearchRequset: TPostFilter = {
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

export const searchRequest = atom<TPostFilter>({
  key: 'SearchRequest',
  default: defaultSearchRequset,
});
