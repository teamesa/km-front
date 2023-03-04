import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';
export interface MyArchiveDetailProps {
  updatedAt: string;
  comment: string;
  starRating: number;
  food: string;
  cafe: string;
  photoUrls: string[];
  archiveActionButton: ArchiveDetailLinkInfos[];
  item: ProductionItemInfo;
  visibleAtItem: boolean;
}

export interface ProductionItemInfo {
  id: number;
  imageUrl: string;
  title: string;
  typeBadge: PresentationBadge;
}
export interface MyArchiveDetailInfoProps {
  starRating: number;
  food: string;
  cafe: string;
}
export interface MyArchiveDetailHeaderInfoProps {
  title: string;
  updatedAt: string;
  typeBadge: PresentationBadge;
  archiveActionButton: ArchiveDetailLinkInfos[];
}

interface PresentationBadge {
  text: string;
  typeBadge: boolean;
}
interface ArchiveDetailLinkInfos {
  title: string;
  link: string;
}

export const ClickedArchiveDetailUrl = atom<string>({
  key: 'ClickedArchiveDetailUrl',
  default: '',
});

export const ClickedArchiveDeleteUrl = atom<string>({
  key: 'ClickedArchiveDeleteUrl',
  default: '',
});

export const getMyArchiveDetail = async (url: string) => {
  const axios = customAxios();
  const { data } = (await axios({
    url: url,
    method: 'GET',
  })) as AxiosResponse<MyArchiveDetailProps>;

  return data;
};

export const myArchiveDetailInfoState = selector({
  key: 'myArchiveDetailInfoState',
  get: ({ get }) => {
    return getMyArchiveDetail(get(ClickedArchiveDetailUrl));
  },
});
