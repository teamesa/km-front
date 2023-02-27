import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilCallback, useRecoilState } from 'recoil';

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

//디테일. 클릭된 아카이브 디테일 정보 '조회' url
export const ClickedArchiveDetailUrl = atom<string>({
  key: 'ClickedArchiveDetailUrl',
  default: '',
});

// 클릭된 아카이브 '삭제' url.
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

export const useResetMyArchiveDetailState = (url: string) =>
  useRecoilCallback(({ set }) => async () => {
    const archiveDetailData = await getMyArchiveDetail(url);
    return archiveDetailData;
  });
