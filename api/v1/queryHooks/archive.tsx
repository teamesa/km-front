import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getArchivesById,
  getItemsArchivesById,
  postArchivesById,
  putArchivesById,
  putArchivesLike,
} from 'api/v1/archive';

export function useArchiveQuery() {
  function useGetItemsArchivesById({
    id,
    sortType,
  }: {
    id: number;
    sortType: 'MODIFY_DESC' | 'LIKE_DESC';
  }) {
    return useQuery(
      ['get', 'itemsArchive', id],
      async () =>
        await getItemsArchivesById({
          id: id,
          sortType: sortType ?? 'MODIFY_DESC',
        }),
      {
        enabled: !!id,
      },
    );
  }

  function useGetArchivesById(id: number) {
    return useQuery(
      ['get', 'archive', id],
      async () => await getArchivesById({ id }),
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

  function usePutArchivesById() {
    return useMutation(putArchivesById, {});
  }

  return {
    useGetItemsArchivesById,
    useGetArchivesById,
    usePostArchivesById,
    usePutArchivesLike,
    usePutArchivesById,
  };
}
