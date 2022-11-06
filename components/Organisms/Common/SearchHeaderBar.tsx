import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';
import { useRecoilValue } from 'recoil';

import ArrowLeft from 'assets/common/header/ArrowLeft';
import Search from 'assets/common/header/Search';
import { Box, Button, Input } from 'components/Atoms';
import SearchTitle from 'components/Organisms/Search/SearchTitle';
import { Z_INDEX } from 'constants/common';
import { headerState } from 'states/common';
import theme from 'styles/theme';

export default function SearchHeaderBar() {
  const router = useRouter();
  const searchHeader = useRecoilValue(headerState);
  const [keyword, setKeyword] = useState('');
  const [change, setChange] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setChange(true);
  };

  const handleOnClick = () => {
    if (keyword) {
      router.push({
        pathname: '/search/result',
        query: { keyword: keyword },
      });
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  };

  useEffect(() => {
    if (router?.query?.keyword) {
      if (typeof router.query.keyword === 'string') {
        setKeyword(router.query.keyword);
      }
    } else {
      setKeyword('');
    }
  }, [router.query.keyword]);

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
                border={`1px solid ${theme.colors.grayDD}`}
                value={keyword}
                placeholder="검색어를 입력해주세요"
                onChange={onChange}
                onKeyPress={handleOnKeyPress}
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
          <SearchTitle keyword={keyword} change={change} />
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
