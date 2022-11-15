import { Layout } from 'components/Atoms';
import PickRanking from 'components/Organisms/Search/PickRanking';
import RecentSearch from 'components/Organisms/Search/RecentSearch';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Search() {
  useInitHeader({
    headerRight: 'disabled',
    headerLeft: 'disabled',
    isSearchType: true,
  });
  return (
    <Layout
      position="relative"
      padding="0px 15px !important"
      margin="20px 0px 120px"
    >
      <RecentSearch />
    </Layout>
  );
}
