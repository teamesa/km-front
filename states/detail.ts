import { AxiosResponse } from 'axios';
import { selectorFamily } from 'recoil';

import { getArchivesById } from 'api/v1/archive';
import { getItmesDetailById } from 'api/v1/items';
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

export const detailState = selectorFamily({
  key: 'DetailState',
  get: (id: number) => async () => {
    const introduction = await getItmesDetailById({
      id: id,
    });
    const archive = await getArchivesById({
      id: id,
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
