import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';
export interface MyArchiveDetailProps {
  length: number;
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

export const getMyArchiveDetail = async (archiveId: string) => {
  const axios = customAxios();
  const { data } = (await axios({
    url: `/api/archive/detail/${archiveId}`,
    method: 'GET',
  })) as AxiosResponse<MyArchiveDetailProps>;

  return data;
};

export default atom<MyArchiveDetailProps>({
  key: 'MyArchiveDetailState',
  default: selector({
    key: 'MyArchiveDetailState/default',
    get: () => getMyArchiveDetail('578'),
  }),
});
