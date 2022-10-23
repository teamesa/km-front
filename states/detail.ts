import { AxiosResponse } from 'axios';
import { atom, selector, selectorFamily, useRecoilCallback } from 'recoil';

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
  archives: {
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
  }[];
}

type TGetArchive = {
  title: string;
  contents: ArchiveContents;
};

const axios = customAxios();

export async function getSummary({ itemId }: { itemId?: number } = {}) {
  const { data } = (await axios({
    url: `/api/item/info/${itemId}`,
    method: 'GET',
  })) as AxiosResponse<TGetSummary>;

  return data;
}
export async function getArchive({ itemId }: { itemId?: number } = {}) {
  const pathname = window?.location?.pathname;
  const queryData = pathname.slice(1).split('/');
  const { data } = (await axios({
    url: `/api/archive/${itemId || Number(queryData[1])}`,
    method: 'GET',
  })) as AxiosResponse;

  return data;
}

export async function getIntroduction({ itemId }: { itemId: number }) {
  const { data } = (await axios({
    url: `/api/item/detail/${itemId}`,
    method: 'GET',
  })) as AxiosResponse<TGetIntroduction>;

  return data;
}

export const detailIntroductionState = selectorFamily({
  key: 'DetailIntroductionState',
  get: (itemId: number) => async () => {
    const response = await getIntroduction({ itemId });
    return response;
  },
});

export const detailSummaryState = selectorFamily({
  key: 'DetailSummaryState',
  get: (itemId: number) => async () => {
    const response = await getSummary({ itemId });
    return response;
  },
});

export const detailArchiveState = selectorFamily({
  key: 'DetailArchivenState',
  get: () => async () => {
    const response = await getArchive();
    return response;
  },
});

export const useResetDetailArchiveFunction = () =>
  useRecoilCallback(({ set }) => async () => {
    const newStateData = await getArchive();
    set(detailArchiveState, newStateData);
  });

export const detailState = selectorFamily({
  key: 'DetailState',
  get: (itemId: number) => async () => {
    const summary = await getSummary({ itemId: itemId });
    const introduction = await getIntroduction({ itemId: itemId });
    const archive = await getArchive({ itemId: itemId });
    const tabViewData =
      introduction.summary === null && introduction.photo.length === 0
        ? [{ ...archive }]
        : [{ contents: { ...introduction }, title: '소개' }, { ...archive }];

    return {
      summary,
      tabViewData,
    };
  },
});
