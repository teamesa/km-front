import { AxiosPromise } from 'axios';

import { customKmAxios } from 'api/customKmAxios';
import { PickResponse } from 'constants/type/api';

export function putPick({ id, body }: { id: number; body: boolean }) {
  return customKmAxios({
    url: `/api/pick/${id}`,
    method: 'PUT',
    data: body,
  }) as AxiosPromise<PickResponse>;
}
