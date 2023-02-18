import { AxiosPromise } from 'axios';

import { customKmAxios } from 'api/customKmAxios';
import { GeneralResponseArchiveResponse } from 'constants/type/api';

export function getArchivesById({
  id,
  sortType,
}: {
  id: number;
  sortType: 'MODIFY_DESC' | 'LIKE_DESC';
}) {
  return customKmAxios({
    url: `/api/items/${id}/archives`,
    method: 'GET',
    params: {
      sortType,
    },
  }) as AxiosPromise<GeneralResponseArchiveResponse>;
}
