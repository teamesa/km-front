import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getArchivesById,
  postArchivesById,
  putArchivesLike,
} from 'api/v1/archive';

export function useArchiveQuery() {
  function useGetArchivesById({
    id,
    sortType,
  }: {
    id: number;
    sortType: 'MODIFY_DESC' | 'LIKE_DESC';
  }) {
    return useQuery(
      ['get', 'archive', id],
      async () =>
        await getArchivesById({ id: id, sortType: sortType ?? 'MODIFY_DESC' }),
      {
        enabled: !!id,
      },
    );
  }

  function usePostArchivesById() {
    return useMutation(postArchivesById, {});
  }

  function usePutArchivesLike() {
    return useMutation(putArchivesLike, {});
  }

  return { useGetArchivesById, usePostArchivesById, usePutArchivesLike };
}
