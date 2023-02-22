import { AxiosPromise } from 'axios';

import { customKmAxios } from 'api/customKmAxios';
import { AutoCompleteResult } from 'constants/type/api';

export function getSearchAutoComplete({ query }: { query: string }) {
  return customKmAxios({
    url: '/api/search/auto-complete',
    method: 'GET',
    params: {
      query: encodeURIComponent(query),
    },
  }) as AxiosPromise<AutoCompleteResult>;
}
