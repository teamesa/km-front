import { AxiosResponse } from 'axios';
import { atom, selectorFamily } from 'recoil';

import { data } from 'components/Organisms/Detail/data';
import customAxios from 'utils/hooks/customAxios';

type TGetSummary = {
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
};

type TGetIntroduction = {
  photo: string[] | [];
  summary: string | null;
};

const axios = customAxios();

export async function getSummary({ itemId }: { itemId: number }) {
  const { data } = (await axios({
    url: `/api/item/info/${itemId}`,
    method: 'GET',
  })) as AxiosResponse<TGetSummary>;

  return data;
}

export async function getIntroduction({ itemId }: { itemId: number }) {
  const { data } = (await axios({
    url: `/api/item/detail/${itemId}`,
    method: 'GET',
  })) as AxiosResponse<TGetIntroduction>;

  return data;
}

export const tempSummaryState = selectorFamily({
  key: 'TempDetailState',
  get: (itemId: number) => async () => {
    const summary = await getSummary({ itemId: itemId });
    const introduction = await getSummary({ itemId: itemId });

    return { summary, introduction };
  },
});

export default atom({
  key: 'DetailState',
  default: data,
});
