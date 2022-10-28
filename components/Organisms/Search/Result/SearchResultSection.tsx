import { useRecoilValueLoadable } from 'recoil';

import NoSearchResult from 'components/Organisms/Search/Result/NoSearchResult';
import SearchResultCard from 'components/Organisms/Search/Result/SearchResultCard';
import { searchListState } from 'states/search';

export default function SearchResultSection() {
  const data = useRecoilValueLoadable(searchListState);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0) {
        return <NoSearchResult />;
      } else {
        return (
          <>
            {data.contents.contents.map((content, index) => (
              <SearchResultCard key={content?.id ?? index} content={content} />
            ))}
          </>
        );
      }
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
}
