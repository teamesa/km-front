import { AxiosResponse } from 'axios';
import { atom, selector, selectorFamily } from 'recoil';

import customAxios from 'utils/hooks/customAxios';

export interface ArchiveWirteProps {
  itemId: number;
  starRating: number;
  comment: string;
  photoUrls: string[];
  placeInfos: {
    address: string;
    name: string;
    placeType: 'FOOD' | 'CAFE';
    roadAddress: string;
  }[];
  visibleAtItem: boolean;
}

interface TGetArchiveSearch {
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

const axios = customAxios();

export async function getArchiveSearch({ query }: { query: string }) {
  const { data } = (await axios({
    url: `/api/search/auto-complete`,
    method: 'GET',
    params: {
      query,
    },
  })) as AxiosResponse<TGetArchiveSearch>;
  return data;
}

export const ArchiveSearchState = selectorFamily({
  key: 'ArchiveSearchState',
  get: (query: string) => async () => {
    const search = await getArchiveSearch({ query: query });
    return search;
  },
});
export const ArchiveWirteState = atom<ArchiveWirteProps | undefined>({
  key: 'ArchiveWirteState',
  default: undefined,
});
