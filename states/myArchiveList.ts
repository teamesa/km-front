import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilCallback } from 'recoil';

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
  api: string;
  comment: string;
  existArchiveImages: boolean;
  itemApiUrl: string;
  itemPageUrl: string;
  listImageUrl: string;
  title: string;
  typeBadge: PresentationBadge;
  places: string;
  updatedAt: string;
};

export type PresentationBadge = {
  text: string;
  typeBadge: boolean;
};

export const getList = async () => {
  const axios = customAxios();
  const { data } = (await axios({
    url: `/api/archives/my`,
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

export const useResetMyArchiveListStateFunction = () =>
  useRecoilCallback(({ set }) => async () => {
    const listStateData = await getList();
    set(myArchiveListState, listStateData);
  });

export const myArchiveListState = atom({
  key: 'MyArchiveListState',
  default: selector({
    key: 'MyArchiveListState/default',
    get: () => getList(),
  }),
});
