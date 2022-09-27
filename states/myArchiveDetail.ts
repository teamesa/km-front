import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';
export interface MyArchiveDetailProps {
  typeBadge: PresentationBadge;
  updatedAt: string;
  title: string;
  comment: string;
  starRating: number;
  food: string;
  cafe: string;
  photoUrls: string[];
  archiveAdditionalInfos: ArchiveDetailLinkInfos[];
}

export interface PresentationBadge {
  text: string;
  typeBadge: boolean;
}
export interface ArchiveDetailLinkInfos {
  title: string;
  link: string;
}

export const ClickedArchiveId = atom<string>({
  key: 'ClickedArchiveId',
  default: '578',
});

export const getMyArchiveDetail = async (archiveId: string) => {
  const axios = customAxios();
  const { data } = (await axios({
    url: `/api/archive/detail/${archiveId.toString()}`,
    method: 'GET',
  })) as AxiosResponse<MyArchiveDetailProps>;

  return data;
};

export const myArchiveDetailInfoState = selector({
  key: 'myArchiveDetailInfoState',
  get: ({ get }) => {
    return getMyArchiveDetail(get(ClickedArchiveId));
  },
});
