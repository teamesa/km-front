import { AxiosResponse } from 'axios';
import { selectorFamily } from 'recoil';

import { noIntroData } from 'components/Organisms/Detail/data';
import customAxios from 'utils/hooks/customAxios';

export type TGetSummary = {
  summary: any;
  feeType: string;
  homePageUrl: string;
  lat: number;
  lng: number;
  place: string;
  progress: boolean;
  term: string;
  time: string;
  title: string;
  type: string;
  thumbnailImageUrl: string;
  ticketUrl: string;
  itemInfoAdditionalInfo: {
    createArchiveUrl: string;
    heart: {
      heartClicked: boolean;
      id: number;
      link: string;
    };
    heartCount: number;
  };
};

type TGetIntroduction = {
  photo: string[] | [];
  summary: string | null;
};

type TabViewData = {
  title?: string | null;
  contents: any;
};

const axios = customAxios();

export async function getSummary({ itemId }: { itemId: number }) {
  const { data } = (await axios({
    url: `/api/item/info/${itemId}`,
    method: 'GET',
  })) as AxiosResponse<TGetSummary>;

  return data;
}
export async function getArchive({ itemId }: { itemId: number }) {
  return noIntroData;
}

export async function getIntroduction({ itemId }: { itemId: number }) {
  const { data } = (await axios({
    url: `/api/item/detail/${itemId}`,
    method: 'GET',
  })) as AxiosResponse<TGetIntroduction>;

  return data;
}

export const DetailState = selectorFamily({
  key: 'DetailState',
  get: (itemId: number) => async () => {
    const summary = await getSummary({ itemId: itemId });
    const introduction = await getIntroduction({ itemId: itemId });
    const archive = await getArchive({ itemId: itemId });

    const tabViewData: Array<TabViewData> =
      introduction.summary === null
        ? [{ ...archive }]
        : [{ contents: { ...introduction }, title: '소개' }, { ...archive }];

    return {
      summary,
      tabViewData,
    };
  },
});
