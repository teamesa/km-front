import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilCallback } from 'recoil';

import { ArchiveSquareState } from 'states/archive-square';
import customAxios from 'utils/hooks/customAxios';
export interface ArchiveWirteProps {
  itemId: number;
  starRating: number;
  comment: string;
  photoUrls: string[];
  item: {
    id: number;
    imageUrl: string;
    title: string;
    typeBadge: {
      text: string;
      typeBadge: boolean;
    };
  };
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

export async function getArchiveById({ itemId }: { itemId?: any } = {}) {
  const search = window?.location?.search;
  const queryParmas: any = {};

  const queryData = search.slice(1).split('&');
  queryData.forEach((data) => {
    const [key, value] = data.split('=');
    queryParmas[key] = decodeURIComponent(value);
  });

  const { data } = (await axios({
    method: 'GET',
    url: `/api/archives/${itemId || queryParmas.id}`,
  })) as AxiosResponse<ArchiveWirteProps>;

  return data;
}

export const archiveWriteState = atom({
  key: 'ArchiveWriteState',
  default: selector({
    key: 'ArchiveWriteState/default',
    get: () => {
      const pathname = window?.location?.pathname;

      if (pathname === '/archive/update') {
        return getArchiveById();
      }

      return undefined;
    },
  }),
});

export const useResetArchiveByIdStateFunction = () =>
  useRecoilCallback(
    ({ set }) =>
      async () => {
        const archiveByIdData = await getArchiveById();
        set(archiveWriteState, archiveByIdData);
      },
    [],
  );
