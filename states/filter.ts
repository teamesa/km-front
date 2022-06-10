import { AxiosResponse } from 'axios';
import { atom, selector, selectorFamily } from 'recoil';

import customAxios from 'utils/hooks/customAxios';

type TPostCategory = {
  exhibitionType: string;
};

const axios = customAxios();

export async function postCategory({ exhibitionType }: any) {
  // const type = props.exhibitionType;

  const { data } = await axios({
    url: `/api/search`,
    method: 'POST',
    data: exhibitionType,
  });

  console.log('data', data);
  return data;
}

const tempData = {
  // filterOptions: {
  //   exhibitionType: 'EXHIBITION',
  //   feeTypes: ['FREE'],
  //   progressTypes: ['ON'],
  //   regionTypes: ['SEOUL'],
  // },
  queryString: '',
  requestPagingStatus: {
    currentContentsCount: 0,
    pageNumber: 0,
    pageSize: 10,
  },
  searchSortType: 'END_DATE_ASC',
};

export const FilterState = selector({
  key: 'FilterState',
  get: async () => {
    const category = await postCategory({ exhibitionType: tempData });
    return {
      category,
    };
  },
});
