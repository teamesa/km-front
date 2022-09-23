import { AxiosResponse } from 'axios';
import {
  atom,
  GetRecoilValue,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

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

// export default atom<MyArchiveDetailProps>({
//   key: 'MyArchiveDetailState',
//   default: selector({
//     key: 'MyArchiveDetailState/default',
//     get: ({ get }) => {
//       const archiveId = get(ClickedArchiveId);
//       getMyArchiveDetail(archiveId);
//     },
//   }),
// });

export const myArchiveDetailInfoState = selector({
  key: 'myArchiveDetailInfoState',
  get: ({ get }) => {
    return getMyArchiveDetail(get(ClickedArchiveId));
  },
});
