import { useQuery } from '@tanstack/react-query';

import {
  getItemsById,
  getItemsSummaryById,
  getItmesDetailById,
} from 'api/v1/items';

export function useItems() {
  function useGetItemsById(id: number) {
    return useQuery(['items', id], async () => await getItemsById({ id }), {
      enabled: !!id,
    });
  }

  function useItemState(id: number) {
    let status: 'exhibit' | 'none' | 'loading' = 'loading';
    const { data, isLoading, error } = useGetItemsById(id);

    if (isLoading) {
      status = 'loading';
    } else if (error) {
      status = 'none';
    } else if (data) {
      status = 'exhibit';
    }

    return {
      status,
    };
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

  return {
    useGetItemsById,
    useItemState,
    useGetItmesDetailById,
    useGetItemsSummaryById,
  };
}
