import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { useRecoilValue } from 'recoil';

import ArrowLeft from 'assets/common/header/ArrowLeft';
import Search from 'assets/common/header/Search';
import { Box, Button, Input } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { headerState } from 'states/common';
import theme from 'styles/theme';

function SearchHeaderBar() {
  const router = useRouter();
  const searchHeader = useRecoilValue(headerState);
  const inputRef = useRef<any>('');
  // const [keyword, setKeyword] = useState('');

  // useEffect(() => {
  //   if (router.query.keyword) {
  //     inputRef.current.defaultValue = router.query.keyword;
  //   }

  //   console.log('inputRef.current.defaultValue', inputRef.current.defaultValue);
  // }, [router.query.keyword]);

  // useEffect(() => {
  //   if (router?.query?.keyword && inputRef.current) {
  //     inputRef.current.value = router.query.keyword;
  //   } else if (inputRef.current) {
  //     inputRef.current.value = '';
  //   }
  // }, [router.query.keyword]);

  const handleOnClick = () => {
    const keyword = inputRef.current.value;
    if (keyword) {
      router.push({
        pathname: '/search/result',
        query: { keyword: keyword },
      });
    }
  };

  const handleOnKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
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
              defaultValue={router.query.keyword}
              placeholder="검색어를 입력해주세요"
              onKeyPress={handleOnKeyPress}
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
      ) : (
        ''
      )}
    </>
  );
}
export default React.memo(SearchHeaderBar);
