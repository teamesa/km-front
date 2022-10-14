import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilCallback } from 'recoil';

import {} from 'states/list-request';
import customAxios from 'utils/hooks/customAxios';

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
