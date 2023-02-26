import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import {
  getItemsById,
  getItemsSummaryById,
  getItmesDetailById,
} from 'api/v1/items';

export function useItems() {
  const router = useRouter();

  function useGetItemsById(id: number) {
    return useQuery(['items', id], async () => await getItemsById({ id }), {
      enabled: !!id,
      onError: (err: any) => {
        const { alert } = err?.response ?? {};
        if (alert) {
          router.push('/detail/none');
        } else {
          console.log(err?.response);
        }
      },
    });
  }

  function useGetItmesDetailById(id: number) {
    return useQuery(
      ['get', 'detail', id],
      async () => await getItmesDetailById({ id }),
      {
        enabled: !!id,
      },
    );
  }

  function useGetItemsSummaryById(id: number) {
    return useQuery(
      ['get', 'summary', id],
      async () => await getItemsSummaryById({ id }),
      {
        enabled: !!id,
      },
    );
  }

  return { useGetItemsById, useGetItmesDetailById, useGetItemsSummaryById };
}
