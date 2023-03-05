import { customKmAxios } from 'api/customKmAxios';
import { AxiosPromise } from 'axios';
import { ModuleResponse } from 'components/Organisms/Home/ModuleTypes';

export function getHome() {
  return customKmAxios({
    url: `/api/home`,
    method: 'GET',
  }) as AxiosPromise<ModuleResponse>;
}
