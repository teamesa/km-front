import axios, { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

export type TPoistPick = {
  responsePagingStatus: {
    nextPage: number;
    currentPage: number;
    pageSize: number;
    hasNext: boolean;
    totalContentsCount: number;
    currentContentsCount: number;
  };
  count: number;
  contents: Array<PickPageContents>;
};

export type PickPageContents = {
  id: number;
  presentationImage: PresentationPickImage;
  typeBadge: PresentationPickBadge;
  additionalBadgeList: [PresentationPickBadge];
  title: PresentationPickTitle;
  heart: PresentationPickHeart;
  listItemAdditionalInfo: PresentationPicklistItemAdditionalInfo;
};

export type PresentationPickImage = {
  url: string;
  link: string;
  backgroundText: string;
  dimColor: string;
  opacity: number;
  dimTarget: boolean;
};

export type PresentationPickBadge = {
  text: string;
  typeBadge: boolean;
};

export type PresentationPickTitle = {
  text: string;
  link: string;
};

export type PresentationPickHeart = {
  heartClicked: boolean;
  link: string;
  id: number;
};

export type PresentationPicklistItemAdditionalInfo = {
  heartCount: number | null;
  grade: number | null;
  archiveCount: number | null;
};

export const getPick = async () => {
  console.log('reset');
  const { data } = (await axios({
    url: '/api/pick',
    method: 'POST',
    data: {
      requestPagingStatus: {
        currentContentsCount: 0,
        pageNumber: 0,
        pageSize: 100,
      },
    },
  })) as AxiosResponse<TPoistPick>;
  return data;
};

export default atom({
  key: 'PickState',
  default: selector({
    key: 'PickState/default',
    get: () => getPick(),
  }),
});

// export default selector({
//   key: 'PickState',
//   get: () => getPick(),
// });
