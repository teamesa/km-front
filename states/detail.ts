import { selectorFamily } from 'recoil';

import { getArchivesById } from 'api/v1/archive';
import { getItmesDetailById } from 'api/v1/items';

export const detailState = selectorFamily({
  key: 'DetailState',
  get: (id: number) => async () => {
    const introduction = await getItmesDetailById({
      id: id,
    });
    const archive = await getArchivesById({
      id: id,
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
