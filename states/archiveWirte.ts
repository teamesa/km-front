import { AxiosResponse } from 'axios';
import { atom } from 'recoil';

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

export async function postArchiveWirte({ body }: { body: ArchiveWirteProps }) {
  const { data } = (await axios({
    method: 'POST',
    url: `/api/archive`,
    data: body,
  })) as AxiosResponse<ArchiveWirteProps>;

  return data;
}

export async function getArchiveById({ itemId }: { itemId: number }) {
  const { data } = (await axios({
    method: 'GET',
    url: `/api/archive/detail/${itemId}`,
  })) as AxiosResponse<ArchiveWirteProps>;

  return data;
}

export const ArchiveWriteState = atom<ArchiveWirteProps | undefined>({
  key: 'ArchiveWriteState',
  default: undefined,
});
