import { useMutation, useQuery } from '@tanstack/react-query';

import { getArchivesById, postArchivesById } from 'api/v1/archive';

export function useArchive() {
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

  return { useGetArchivesById, usePostArchivesById };
}
