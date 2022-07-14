import { atom } from 'recoil';

export interface ArchiveWirteProps {
  itemId: number;
  starRating: number;
  comment: string;
  photoUrls: string[];
  placeInfos: {
    address: string;
    name: string;
    placeType: 'FOOD' | 'CAFE';
    roadAddress: string;
  }[];
  visibleAtItem: boolean;
}

export const ArchiveWirteState = atom<ArchiveWirteProps | undefined>({
  key: 'ArchiveWirteState',
  default: undefined,
});
