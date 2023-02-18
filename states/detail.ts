import { selector } from 'recoil';

import { getArchivesById } from 'api/v1/archive';
import { getItmesDetailById, getItemsById } from 'api/v1/items';

const query = () => {
  const pathname = window?.location?.pathname;
  const queryData = pathname.slice(1).split('/');
  return queryData;
};

export const useGetItemsById = selector({
  key: 'UseGetItemsById',
  get: async () => {
    const queryData = query();
    try {
      const { data } = await getItemsById({ id: Number(queryData[1]) });
      return data;
    } catch (error: any) {
      const { data, alert } = error.response;
      console.error(alert ?? data);
    }
  },
});

export const detailState = selector({
  key: 'DetailState',
  get: async () => {
    const queryData = query();
    const introduction = await getItmesDetailById({
      id: Number(queryData[1]),
    });
    const archive = await getArchivesById({
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
