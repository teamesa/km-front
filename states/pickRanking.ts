import axios, { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import { PickPageContents } from 'states/pick';

export type TPostMostPick = {
  contents: Array<PickPageContents>;
};

export const getPickMost = async () => {
  const { data } = (await axios({
    url: '/api/pick/most',
    method: 'GET',
  })) as AxiosResponse<TPostMostPick>;
  return data;
};

export const pickMostState = atom<TPostMostPick>({
  key: 'PickMostState',
  default: selector({
    key: 'PickMostState/default',
    get: () => getPickMost(),
  }),
});
