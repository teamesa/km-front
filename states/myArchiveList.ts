import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

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
  title: string;
  comment: string;
  places: string;
  typeBadge: PresentationBadge;
  listImageUrl: string;
  updatedAt: string;
  existArchiveImages: boolean;
};

export type PresentationBadge = {
  text: string;
  typeBadge: boolean;
};

export const getList = async () => {
  const axios = customAxios();
  const { data } = (await axios({
    url: `/api/archive/my`,
    method: 'POST',
    data: {
      requestPagingStatus: {
        currentContentsCount: 0,
        pageNumber: 0,
        pageSize: 10,
      },
    },
  })) as AxiosResponse<TPostList>;
  return data;
};

export default atom({
  key: 'MyArchiveListState',
  default: selector({
    key: 'MyArchiveListState/default',
    get: () => getList(),
  }),
});
