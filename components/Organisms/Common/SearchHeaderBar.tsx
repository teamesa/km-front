import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import ArrowLeft from 'assets/common/header/ArrowLeft';
import Search from 'assets/common/header/Search';
import { Box, Button, Input } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { searchRequest } from 'states';
import { headerState } from 'states/common';
import { getSearchList, searchListState } from 'states/search';
import theme from 'styles/theme';

export default function HeaderBar() {
  const router = useRouter();
  const searchHeader = useRecoilValue(headerState);
  const [searchRequestBody, setSearchRequest] = useRecoilState(searchRequest);
  const setSearchData = useSetRecoilState(searchListState);
  const [keyword, setKeyword] = useState<string>('');

  const setSearchValue = async (value: string) => {
    const newSearchRequest = {
      ...searchRequestBody,
      queryString: value,
    };
    setSearchRequest(newSearchRequest);
    const data = await getSearchList(newSearchRequest);
    setSearchData(data);
  };

  const onChangeData = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      {searchHeader.isSearchType ? (
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
              router.pathname === '/search/result'
                ? router.push('/search')
                : router.back();
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
              border={`1px solid ${theme.colors.grayDD}`}
              onChange={onChangeData}
              type="search"
              placeholder="검색어를 입력해주세요"
            />
            <Button
              position="absolute"
              top="5px"
              right="20px"
              width="40px"
              height="40px"
              type="submit"
              onClick={() => {
                if (keyword !== '') {
                  setSearchValue(keyword);
                  router.push(`/search/result?${keyword}`);
                }
              }}
            >
              <Search width="15" height="15" />
            </Button>
          </Box>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
