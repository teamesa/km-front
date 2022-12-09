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
    <Layout padding="20px 15px 60px !important">
      <SearchResultSection />
    </Layout>
  );
}
