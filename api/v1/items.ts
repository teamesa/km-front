import { AxiosPromise } from 'axios';

import { customKmAxios } from 'api/customKmAxios';
import {
  DetailResponse,
  ItemInfoResponse,
  ItemSummaryResponse,
} from 'constants/type/api';

export function getItemsById({ id }: { id: number }) {
  return customKmAxios({
    url: `/api/items/${id}`,
    method: 'GET',
  }) as AxiosPromise<ItemInfoResponse>;
}

export function getItmesDetailById({ id }: { id: number }) {
  return customKmAxios({
    url: `/api/items/${id}/detail`,
    method: 'GET',
  }) as AxiosPromise<DetailResponse>;
}

export function getItemsSummaryById({ id }: { id: number }) {
  return customKmAxios({
    url: `/api/items/${id}/summary`,
    method: 'GET',
  }) as AxiosPromise<ItemSummaryResponse>;
}
