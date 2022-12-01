import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { useRecoilValue } from 'recoil';

import ArrowLeft from 'assets/common/header/ArrowLeft';
import Search from 'assets/common/header/Search';
import { Box, Button, Input } from 'components/Atoms';
import SearchTitle from 'components/Organisms/Search/SearchTitle';
import { Z_INDEX } from 'constants/common';
import { headerState } from 'states/common';
import { getSearchTitle } from 'states/search';
import theme from 'styles/theme';
import useSetLocalstorageKeywords from 'utils/hooks/useSetLocalstorageKeywords';

interface AutoContents {
  id: number;
  link: string;
  searchedTextLocationEnd: number;
  searchedTextLocationStart: number;
  title: string;
}

export default function SearchHeaderBar() {
  const { makeLocalStorageKeywords } = useSetLocalstorageKeywords();
  const router = useRouter();
  const searchHeader = useRecoilValue(headerState);
  const [keyword, setKeyword] = useState('');
  const [keyItems, setKeyItems] = useState<AutoContents[]>([]);
  const inputRef = useRef<any>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debounceOnChange();
    if (!inputRef?.current?.value) {
      setKeyItems([]);
    }
  };

  const handleOnClick = () => {
    if (keyword) {
      makeLocalStorageKeywords(keyword);
      router.push({
        pathname: '/search/result',
        query: { keyword },
      });
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  };

  const debounceOnChange = () => {
    const debounce = setTimeout(() => {
      if (inputRef?.current?.value) {
        const updateData = async () => {
          const searchData = await getSearchTitle({
            query: inputRef.current.value,
          });
          setKeyItems(searchData.contents);
        };
        updateData();
      }
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  };

  useEffect(() => {
    setKeyItems([]);
    if (router?.query?.keyword) {
      if (typeof router.query.keyword === 'string') {
        setKeyword(router.query.keyword);
      }
    }
    // 검색 페이지 진입시 Input값 제거
    else if (router.pathname === '/search') {
      setKeyword('');
    }
  }, [router.pathname, router.query.keyword]);

  return (
    <>
      {searchHeader.isSearchType ? (
        <Box position="relative">
          <Box
            display="block"
            position="fixed"
            css={css`
              padding-top: env(safe-area-inset-top);
              height: calc(65px + env(safe-area-inset-top));
            `}
            top="0px"
            width="100%"
            background={theme.colors.white}
            zIndex={Z_INDEX.SKY}
          >
            <Box
              aria-label="뒤로가기"
              role="button"
              position="absolute"
              top="7.5px"
              left="5px"
              width="30px"
              height="30px"
              zIndex="1"
              onClick={() => {
                router.back();
              }}
              css={css`
                cursor: pointer;
              `}
            >
              <ArrowLeft width="30" height="30" viewBox="-10 -6 30 30" />
            </Box>
            <Box
              position="relative"
              padding="0px 15px 0px 45px"
              height="45px"
              lineHeight="45px"
            >
              <Input
                padding="0px 45px 0px 15px"
                height="40px"
                fontSize="13px"
                backgroundColor={theme.colors.white}
                border={`1px solid ${theme.colors.grayDD}`}
                borderRadius="0"
                value={keyword}
                placeholder="검색어를 입력해주세요"
                onChange={onChange}
                onKeyPress={handleOnKeyPress}
                type="search"
                ref={inputRef}
              />
              <Button
                position="absolute"
                top="5px"
                right="20px"
                width="40px"
                height="40px"
                type="submit"
                onClick={() => {
                  handleOnClick();
                }}
              >
                <Search width="15" height="15" />
              </Button>
            </Box>
          </Box>
          <SearchTitle keyItems={keyItems} keyword={keyword} />
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
