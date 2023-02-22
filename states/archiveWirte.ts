import { AxiosResponse } from 'axios';
import { selectorFamily, useRecoilCallback } from 'recoil';

import { getArchivesById } from 'api/v1/archive';
import customAxios from 'utils/hooks/customAxios';

// TODO 삭제
export interface ArchiveWirteProps {
  itemId: number;
  starRating: number;
  comment: string;
  photoUrls: string[];
  placeInfos: {
    address: string;
    name: string;
    placeType: string;
    roadAddress: string;
  }[];
  visibleAtItem: boolean;
  food?: string;
  cafe?: string;
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

//v1

export const useGetArchivesById = selectorFamily({
  key: 'UseGetArchivesById',
  get: (id: number) => async () => {
    const { data } = await getArchivesById({ id: id });
    return data;
  },
});
