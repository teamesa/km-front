import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import { defaultSearchRequset, TPostFilter } from './filter';

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
  contents: Array<MyArchivePageContents>;
};

export type MyArchivePageContents = {
  id: number;
  title: PresentationTitle;
  comment: string;
  places: string;
  typeBadge: PresentationBadge;
  imageUrl: string;
  updateAt: string;
  existArchiveImages: boolean;
};

export type PresentationTitle = {
  text: string;
  link: string;
};

export type PresentationBadge = {
  text: string;
  typeBadge: boolean;
};

export const getList = async (post: TPostFilter) => {
  const exhibitionType = post.filterOptions.exhibitionType;
  const searchSortType = post.searchSortType;
  const axios = customAxios();
  const { data } = (await axios({
    url: `/api/search`,
    method: 'POST',
    data: {
      filterOptions: {
        exhibitionType: exhibitionType,
        feeTypes: [],
        progressTypes: [],
        regionTypes: [],
      },
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
  key: 'MyArchiveListState',
  default: selector({
    key: 'MyArchiveListState/default',
    get: () => getList(defaultSearchRequset),
  }),
});
