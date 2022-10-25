import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import NoSearchResult from 'components/Organisms/\bSearch/Result/NoSearchResult';
import ListCard from 'components/Organisms/List/ListCard';
import { searchListState } from 'states/search';

export default function SearchResultSection() {
  const data = useRecoilValueLoadable(searchListState);
  // const setSearchResult = useRecoilValue(searchListState);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0) {
        return <NoSearchResult />;
      } else {
        return (
          <>
            {data.contents.contents.map((content, index) => (
              <ListCard key={content?.id ?? index} content={content} />
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
