import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilCallback } from 'recoil';

import { SearchRequestInterface } from 'states/search-result-request';
import customAxios from 'utils/hooks/customAxios';

interface TGetSearchList {
  contents: {
    id: number;
    link: string;
    searchedTextLocationEnd: number;
    searchedTextLocationStart: number;
    title: string;
  }[];
  responsePagingStatus: {
    currentContentsCount: number;
    currentPage: number;
    hasNext: boolean;
    nextPage: number;
    pageSize: number;
    query: string;
    totalContentsCount: number;
  };
}

export type TPostSearch = {
  responsePagingStatus: {
    nextPage: number;
    currentPage: number;
    pageSize: number;
    hasNext: boolean;
    totalContentsCount: number;
    currentContentsCount: number;
  };
  contents: Array<SearchPageContents>;
};

export type SearchPageContents = {
  id: number;
  presentationImage: PresentationSearchImage;
  typeBadge: PresentationSearchBadge;
  additionalBadgeList: [PresentationSearchBadge];
  title: PresentationSearchTitle;
  heart: PresentationSearchHeart;
  listItemAdditionalInfo: PresentationSearchItemAdditionalInfo;
};

export type PresentationSearchImage = {
  url: string;
  link: string;
  backgroundText: string;
  dimColor: string;
  opacity: number;
  dimTarget: boolean;
};

export type PresentationSearchBadge = {
  text: string;
  typeBadge: boolean;
};

export type PresentationSearchTitle = {
  text: string;
  link: string;
};

export type PresentationSearchHeart = {
  heartClicked: boolean;
  link: string;
  id: number;
};

export type PresentationSearchItemAdditionalInfo = {
  heartCount: number | null;
  grade: number | null;
  archiveCount: number | null;
};

const axios = customAxios();
export const getSearchList = async (post: SearchRequestInterface) => {
  const { data } = (await axios({
    url: `/api/search`,
    method: 'POST',
    data: {
      queryString: post.queryString,
      requestPagingStatus: {
        currentContentsCount: 0,
        pageNumber: 0,
        pageSize: 100,
      },
    },
  })) as AxiosResponse<TPostSearch>;
  return data;
};

export const SearchHeartPickFuction = (itemId: number) =>
  useRecoilCallback(({ set }) => async () => {
    set(searchListState, (newSearchListState) => {
      const contents = newSearchListState.contents.map(
        (it: SearchPageContents) => {
          if (it.heart.id === itemId) {
            return {
              ...it,
              heart: { ...it.heart, heartClicked: !it.heart.heartClicked },
            };
          } else {
            return it;
          }
        },
      );
      return { ...newSearchListState, contents };
    });
  });

export async function getSearchTitle({ query }: { query: string }) {
  const { data } = (await axios({
    url: `/api/search/auto-complete`,
    method: 'GET',
    params: {
      query,
    },
  })) as AxiosResponse<TGetSearchList>;

  return data;
}

export const searchListState = atom<TPostSearch>({
  key: 'SearchListState',
  default: selector({
    key: 'SearchListState/default',
    get: () => ({
      responsePagingStatus: {
        nextPage: -1,
        currentPage: 0,
        pageSize: 0,
        hasNext: false,
        totalContentsCount: 0,
        currentContentsCount: 0,
      },
      contents: [],
    }),
  }),
});
