import { selector, selectorFamily } from 'recoil';

import { getItemsArchivesById } from 'api/v1/archive';
import {
  getItmesDetailById,
  getItemsById,
  getItemsSummaryById,
} from 'api/v1/items';

// v1
const query = () => {
  const pathname = window?.location?.pathname;
  const queryData = pathname.slice(1).split('/');
  return queryData;
};

export const useGetItemsById = selector({
  key: 'UseGetItemsById',
  get: async () => {
    try {
      const queryData = query();
      const { data } = await getItemsById({ id: Number(queryData[1]) });
      return data;
    } catch (error: any) {
      console.error(error);
    }
  },
});

export const detailState = selector({
  key: 'DetailState',
  get: async () => {
    const pathname = window?.location?.pathname;
    const queryData = pathname.slice(1).split('/');
    const introduction = await getItmesDetailById({
      id: Number(queryData[1]),
    });
    const archive = await getItemsArchivesById({
      id: Number(queryData[1]),
      sortType: 'MODIFY_DESC',
    });

    const tabViewData =
      introduction.data.summary === null && introduction.data.photo.length === 0
        ? [{ ...archive.data }]
        : [
            { contents: { ...introduction.data }, title: '소개' },
            { ...archive.data },
          ];

    return { tabViewData };
  },
});

export const useGetItemsSummaryById = selectorFamily({
  key: 'UseGetItemsSummaryById',
  get: (id: number) => async () => {
    const { data } = await getItemsSummaryById({ id: id });
    return data;
  },
});

export const getItemsInfo = selector({
  key: 'getItemsInfo',
  get: async () => {
    const search = window?.location?.search;
    const queryParmas: any = {};

    const queryData = search.slice(1).split('&');
    queryData.forEach((data) => {
      const [key, value] = data.split('=');
      queryParmas[key] = decodeURIComponent(value);
    });

    const { data } = await getItemsById({ id: queryParmas.exhibitionId });
    return data;
  },
});
