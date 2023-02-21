import { AxiosPromise } from 'axios';

import { customKmAxios } from 'api/customKmAxios';
import {
  ArchiveDetailResponse,
  ArchiveInfo,
  ArchiveRequest,
  GeneralResponseArchiveResponse,
} from 'constants/type/api';

export function getItemsArchivesById({
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
export function getArchivesById({ id }: { id: number }) {
  return customKmAxios({
    url: `/api/archives/${id}`,
    method: 'GET',
  }) as AxiosPromise<ArchiveDetailResponse>;
}

export function putArchivesById({
  archiveId,
  request,
}: {
  archiveId: number;
  request: ArchiveRequest;
}) {
  return customKmAxios({
    url: `/api/archives/${archiveId}`,
    method: 'PUT',
    data: request,
  }) as AxiosPromise<ArchiveInfo>;
}
