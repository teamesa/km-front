import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import {
  defaultSearchRequset,
  FilterState,
  SelectInterface,
} from 'states/search-request';
import customAxios from 'utils/hooks/customAxios';

export type TPostList = {
  responsePagingStatus: {
    nextPage: number;
    currentPage: number;
    pageSize: number;
    hasNext: boolean;
    totalContentsCount: number;
    currentContentsCount: number;
  };
  contents: Array<ListPageContents>;
};

export type ListPageContents = {
  id: number;
  presentationImage: PresentationImage;
  typeBadge: PresentationBadge;
  additionalBadgeList: [PresentationBadge];
  title: PresentationTitle;
  heart: PresentationHeart;
  listItemAdditionalInfo: PresentationlistItemAdditionalInfo;
};

export type PresentationImage = {
  url: string;
  link: string;
  backgroundText: string;
  dimColor: string;
  opacity: number;
  dimTarget: boolean;
};

export type PresentationBadge = {
  text: string;
  typeBadge: boolean;
};

export type PresentationTitle = {
  text: string;
  link: string;
};

export type PresentationHeart = {
  heartClicked: boolean;
  link: string;
  id: number;
};

export type PresentationlistItemAdditionalInfo = {
  heartCount: number | null;
  grade: number | null;
  archiveCount: number | null;
};

type TPostFilter = {
  filterOptions: filterOptionsInterface;
  queryString: '';
  requestPagingStatus: {
    currentContentsCount: number;
    pageNumber: number;
    pageSize: number;
  };
  searchSortType: string;
};

type filterOptionsInterface = {
  exhibitionType: string;
  feeTypes: string[] | [];
  progressTypes: string[] | [];
  regionTypes: string[] | [];
};

const filterByStatus = (filterArray: SelectInterface[]): string[] =>
  filterArray.filter((it) => it.status).map((it) => it.value);

export const convertStateToRequest = (
  filterState: FilterState,
): TPostFilter => ({
  ...filterState,
  filterOptions: {
    exhibitionType: filterState.filterOptions.exhibitionType,
    feeTypes: filterByStatus(filterState.filterOptions.feeTypes),
    regionTypes: filterByStatus(filterState.filterOptions.regionTypes),
    progressTypes: filterByStatus(filterState.filterOptions.progressTypes),
  },
});

export const getListByFilterState = async (post: FilterState) =>
  getList(convertStateToRequest(post));

export const getList = async (post: TPostFilter) => {
  const searchSortType = post.searchSortType;
  const axios = customAxios();
  const { data } = (await axios({
    url: `/api/search`,
    method: 'POST',
    data: {
      filterOptions: post.filterOptions,
      requestPagingStatus: {
        currentContentsCount: 0,
        pageNumber: 0,
        pageSize: 100,
      },
      searchSortType: searchSortType,
    },
  })) as AxiosResponse<TPostList>;
  return data;
};

export default atom({
  key: 'ListState',
  default: selector({
    key: 'ListState/default',
    get: () => getListByFilterState(defaultSearchRequset),
  }),
});
