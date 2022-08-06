import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import { PresentationBadge } from './myArchiveList';

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

export interface ArchiveDetailLinkInfos {
  title: string;
  link: string;
}

export const getMyArchiveDetail = async (archiveId: string) => {
  const axios = customAxios();
  const { data } = (await axios({
    url: `/api/archive/detail/${archiveId}`,
    method: 'GET',
  })) as AxiosResponse<MyArchiveDetailProps>;

  return data;
};

export default atom({
  key: 'MyArchiveDetailState',
  default: selector({
    key: 'MyArchiveDetailState/default',
    get: () => getMyArchiveDetail('596'),
  }),
});
