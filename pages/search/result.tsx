import { useEffect } from 'react';

import { Layout } from 'components/Atoms';
import SearchResultSection from 'components/Organisms/\bSearch/Result/SearchResultSection';
import { useResetListStateFunction } from 'states/list';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function SearchResult() {
  const reseResultState = useResetListStateFunction();
  useInitHeader({
    headerRight: 'disabled',
    headerLeft: 'disabled',
    isSearchType: true,
  });
  useEffect(() => {
    reseResultState();
  }, [reseResultState]);

  return (
    <Layout padding="0px 15px !important" margin="20px 0px 120px">
      <SearchResultSection />
    </Layout>
  );
}
