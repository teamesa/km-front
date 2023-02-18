import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilCallback } from 'recoil';

import { getArchivesById } from 'api/v1/archive';
import { getItmesDetailById, getItemsById } from 'api/v1/items';
import customAxios from 'utils/hooks/customAxios';

export type TGetSummary = {
  detailImageUrl: string;
  feeType: string;
  homePageUrl: string;

  itemInfoAdditionalInfo: {
    archiveLink: {
      title: string;
      link: string;
    };
    heart: {
      heartClicked: boolean;
      id: number;
      link: string;
    };
    heartCount: number;
  };
  lat: number;
  listImageUrl: string;
  lng: number;
  place: string;
  price: string;
  term: string;
  ticketUrl: string;
  time: string;
  title: string;
  type: string;
};

type TGetIntroduction = {
  photo: string[] | [];
  summary: string | null;
};

export interface Archives {
  id: number;
  userProfileUrl: string;
  userName: string;
  updatedAt: string;
  starRating: number;
  likeCount: number;
  heart: {
    heartClicked: boolean;
    link: string;
  };
  comment: string;
  food: string;
  cafe: string;
  photoUrls: string[];
}

export interface ArchiveContents {
  responsePagingStatus: {
    nextPage: number;
    currentPage: number;
    pageSize: number;
    hasNext: false;
    totalContentsCount: number;
    currentContentsCount: number;
  };
  avgStarRating: number;
  archives: Archives[];
}

type TGetArchive = {
  title: string;
  contents: ArchiveContents;
};

const axios = customAxios();

const query = () => {
  const pathname = window?.location?.pathname;
  const queryData = pathname.slice(1).split('/');
  return queryData;
};

export async function getSummary({ itemId }: { itemId?: number } = {}) {
  const queryData = query();
  const { data } = (await axios({
    url: `/api/items/${itemId || Number(queryData[1])}`,
    method: 'GET',
  })) as AxiosResponse<TGetSummary>;

  return data;
}

export const summaryState = atom({
  key: 'SummaryState',
  default: selector({ key: 'SummaryState/default', get: () => getSummary() }),
});

export const useResetSummaryFunction = () =>
  useRecoilCallback(({ set }) => async () => {
    const newSummary = await getSummary();
    set(summaryState, newSummary);
  });

export async function getArchive(itemId?: number) {
  const queryData = query();
  const { data } = (await axios({
    url: `/api/items/${itemId || Number(queryData[1])}/archives`,
    method: 'GET',
  })) as AxiosResponse<TGetArchive>;

  return data;
}

export async function getIntroduction(itemId?: number) {
  const queryData = query();
  const { data } = (await axios({
    url: `/api/items/${itemId || Number(queryData[1])}/detail`,
    method: 'GET',
  })) as AxiosResponse<TGetIntroduction>;

  return data;
}

export const useGetItemsById = selector({
  key: 'UseGetItemsById',
  get: async () => {
    const queryData = query();
    try {
      const { data } = await getItemsById({ id: Number(queryData[1]) });
      return data;
    } catch (error: any) {
      const { data, alert } = error.response;
      console.error(alert ?? data);
    }
  },
});

export const detailState = selector({
  key: 'DetailState',
  get: async () => {
    const queryData = query();
    const introduction = await getItmesDetailById({
      id: Number(queryData[1]),
    });
    const archive = await getArchivesById({
      id: Number(queryData[1]),
      sortType: 'MODIFY_DESC',
    });

    const tabViewData =
      introduction.data.summary === null && introduction.data.photo.length === 0
        ? [{ ...archive.data }]
        : [
            { contents: { ...introduction.data }, title: '소개' },
            { ...archive.data },
          ];

    return { tabViewData };
  },
});
