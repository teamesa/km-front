import { useQuery } from '@tanstack/react-query';

import { getArchivesById } from 'api/v1/archive';

export function useArchive() {
  function useGetArchivesById({
    id,
    sortType,
  }: {
    id: number;
    sortType: 'MODIFY_DESC' | 'LIKE_DESC';
  }) {
    return useQuery(
      ['get', 'detail', id],
      async () =>
        await getArchivesById({ id: id, sortType: sortType ?? 'MODIFY_DESC' }),
      {
        enabled: !!id,
      },
    );
  }

  return { useGetArchivesById };
}
