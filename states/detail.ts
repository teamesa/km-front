import { AxiosResponse } from 'axios';
import {
  atom,
  selector,
  selectorFamily,
  useRecoilCallback,
  useRecoilTransaction_UNSTABLE,
} from 'recoil';

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

export async function getSummary(itemId?: number) {
  const queryData = query();
  const { data } = (await axios({
    url: `/api/item/info/${itemId || Number(queryData[1])}`,
    method: 'GET',
  })) as AxiosResponse<TGetSummary>;

  return data;
}
export async function getArchive(itemId?: number) {
  const queryData = query();
  const { data } = (await axios({
    url: `/api/archive/${itemId || Number(queryData[1])}`,
    method: 'GET',
  })) as AxiosResponse<TGetArchive>;

  return data;
}

export async function getIntroduction(itemId?: number) {
  const queryData = query();
  const { data } = (await axios({
    url: `/api/item/detail/${itemId || Number(queryData[1])}`,
    method: 'GET',
  })) as AxiosResponse<TGetIntroduction>;

  return data;
}

export const useResetDetailArchiveFunction = () =>
  useRecoilCallback(({ set }) => async () => {
    const summary = await getSummary();
    const introduction = await getIntroduction();
    const archive = await getArchive();
    const tabViewData =
      introduction.summary === null && introduction.photo.length === 0
        ? [{ ...archive }]
        : [{ contents: { ...introduction }, title: '소개' }, { ...archive }];

    const newStateData = {
      summary,
      tabViewData,
    };
    set(detailState, newStateData);
  });

export const detailState = atom({
  key: 'DetailState',
  default: selector({
    key: 'DetailState/default',
    get: async () => {
      const summary = await getSummary();
      const introduction = await getIntroduction();
      const archive = await getArchive();
      const tabViewData =
        introduction.summary === null && introduction.photo.length === 0
          ? [{ ...archive }]
          : [{ contents: { ...introduction }, title: '소개' }, { ...archive }];

      return {
        summary,
        tabViewData,
      };
    },
  }),
});
