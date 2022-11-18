import { useRecoilState } from 'recoil';

import { recentKeywords } from 'states/search';

export default function useSetLocalstorageKeywords() {
  const [localStorageKeywords, setlocalStorageKeywords] =
    useRecoilState(recentKeywords);

  const makeLocalStorageKeywords = (keyword: string) => {
    const recentKeywords = localStorageKeywords.slice(0, 5);
    const containedKeywordIndex = recentKeywords.findIndex(
      (it) => it === keyword,
    );
    if (containedKeywordIndex < 0) {
      setlocalStorageKeywords([keyword, ...recentKeywords.slice(0, 4)]);
    } else {
      setlocalStorageKeywords([
        keyword,
        ...recentKeywords.slice(0, containedKeywordIndex),
        ...recentKeywords.slice(containedKeywordIndex + 1, 5),
      ]);
    }
  };

  return { makeLocalStorageKeywords };
}
