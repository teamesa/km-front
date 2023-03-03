import { useQuery } from '@tanstack/react-query';

import { getSearch } from 'api/v1/search';

export function useSearch() {
  function useGetSearch(query: string) {
    return useQuery(['search', query], async () => await getSearch({ query }), {
      enabled: !!query,
    });
  }

  return {
    useGetSearch,
  };
}
