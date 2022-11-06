import { atom } from 'recoil';

export type SearchRequestInterface = {
  queryString: string;
  requestPagingStatus: {
    currentContentsCount: number;
    pageNumber: number;
    pageSize: number;
  };
  searchSortType: string;
};

export const makeDefaulSearchRequest = (): SearchRequestInterface => ({
  queryString: '',
  requestPagingStatus: {
    currentContentsCount: 0,
    pageNumber: 0,
    pageSize: 100,
  },
  searchSortType: 'ENROLL_DESC',
});

export const searchRequest = atom<SearchRequestInterface>({
  key: 'SearchtRequest',
  default: makeDefaulSearchRequest(),
});
