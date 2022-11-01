import { useEffect } from 'react';

import { Layout } from 'components/Atoms';
import SearchResultSection from 'components/Organisms/Search/Result/SearchResultSection';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function SearchResult() {
  useInitHeader({
    headerRight: 'disabled',
    headerLeft: 'disabled',
    isSearchType: true,
  });

  return (
    <Layout padding="0px 15px !important" margin="20px 0px 120px">
      <SearchResultSection />
    </Layout>
  );
}
