import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilCallback } from 'recoil';

import {
  makeDefaultListRequest,
  ListRequestInterface,
  listRequest,
} from 'states/list-request';
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

export const getList = async (post: ListRequestInterface) => {
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

export const useResetListStateFunction = () =>
  useRecoilCallback(({ snapshot, set }) => async () => {
    const requestBody = await snapshot.getPromise(listRequest);
    const listStateData = await getList(requestBody);
    set(listState, listStateData);
  });

export const listState = atom<TPostList>({
  key: 'ListState',
  default: selector({
    key: 'ListState/default',
    get: () => getList(makeDefaultListRequest()),
  }),
});
