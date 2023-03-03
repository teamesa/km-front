import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useSearchQuery } from 'api/v1/queryHooks/search';
import { getItemsSummaryById } from 'api/v1/items';
import { Search } from 'assets/archive/Search';
import { Box, Button, FlexBox, Input, Span } from 'components/Atoms';
import { AutoCompleteItem } from 'constants/type/api';
import theme from 'styles/theme';

export default function SearchTitle() {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<AutoCompleteItem[] | undefined>([]);
  const router = useRouter();
  const { useGetSearch } = useSearchQuery();
  const { data } = useGetSearch(keyword);

  const onChangeData = (e: any) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      setKeyItems(data?.data.contents);
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [data?.data.contents]);

  async function onSearch(
    search: AutoCompleteItem,
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();
    setKeyword(search.title);
    const { data } = await getItemsSummaryById({ id: search.id });

    if (data.archiveWritten === true) {
      return router.push({
        pathname: '/archive/update',
        query: {
          id: data.archiveId,
        },
      });
    } else {
      return router.push({
        pathname: '/archive',
        query: {
          exhibitionId: search.id,
        },
      });
    }
  }

  return (
    <Box
      fontSize="13px"
      marginTop="40px"
      paddingBottom="30px"
      position="relative"
    >
      다녀온 문화생활을 검색해주세요.
      <FlexBox
        marginTop="10px"
        border={`solid 1px ${theme.colors.grayDD}`}
        padding="12px 15px 11px"
      >
        <Input
          type="search"
          placeholder="입력해주세요"
          width="100%"
          value={keyword}
          onChange={onChangeData}
        />
        <Button paddingTop="1px" type="button">
          <Search />
        </Button>
      </FlexBox>
      {keyItems && keyItems?.length > 0 && keyword && (
        <Box
          zIndex="3"
          height="120px"
          overflowY="scroll"
          backgroundColor={theme.colors.white}
          position="absolute"
          top="70px"
          width="100%"
          border={`solid 1px ${theme.colors.black}`}
          padding="0 15px"
        >
          <Box>
            {keyItems.map((search) => (
              <Box key={search.id}>
                <Box padding="12px 0">
                  <Button
                    type="button"
                    onClick={(e) => {
                      onSearch(search, e);
                    }}
                    textAlign="inherit"
                    display="inline-block"
                    overflow="hidden"
                    width="80vw"
                    css={css`
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    `}
                  >
                    {search.title.substring(
                      0,
                      search.searchedTextLocationStart - 1,
                    )}
                    <Span color={theme.colors.orange}>
                      {search.title.substring(
                        search.searchedTextLocationStart,
                        search.searchedTextLocationEnd,
                      )}
                    </Span>
                    {search.title.substring(search.searchedTextLocationEnd)}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
