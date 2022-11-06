import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import NoSearchResult from 'components/Organisms/Search/Result/NoSearchResult';
import SearchResultCard from 'components/Organisms/Search/Result/SearchResultCard';
import { searchRequest } from 'states';
import { getSearchList, searchListState } from 'states/search';

export default function SearchResultSection() {
  const router = useRouter();
  const searchRequestBody = useRecoilValue(searchRequest);
  const setSearchData = useSetRecoilState(searchListState);
  const data = useRecoilValueLoadable(searchListState);
  const query = String(router.query.keyword);

  useEffect(() => {
    const setSearchValue = async (value: string) => {
      const newSearchRequest = {
        ...searchRequestBody,
        queryString: value,
      };
      const data = await getSearchList(newSearchRequest);
      setSearchData(data);
    };
    if (router?.query?.keyword) {
      setSearchValue(query);
    }
  }, [query, router.query, searchRequestBody, setSearchData]);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0) {
        return <NoSearchResult keyword={query} />;
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
