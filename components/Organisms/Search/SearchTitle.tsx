import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Box, Button, Span } from 'components/Atoms';
import theme from 'styles/theme';
import useSetLocalstorageKeywords from 'utils/hooks/useSetLocalstorageKeywords';

export default function SearchTitle({
  keyItems,
  keyword,
  checkDebounce,
}: {
  keyItems: {
    id: number;
    link: string;
    searchedTextLocationEnd: number;
    searchedTextLocationStart: number;
    title: string;
  }[];
  keyword: string;
  checkDebounce: boolean;
}) {
  const router = useRouter();
  const { makeLocalStorageKeywords } = useSetLocalstorageKeywords();

  return (
    <>
      {keyItems?.length > 0 && keyword && checkDebounce && (
        <Box
          zIndex="3"
          width="100%"
          height="100%"
          overflowY="scroll"
          backgroundColor={theme.colors.white}
          position="fixed"
          top="52px"
          padding="12px 15px"
          maxWidth={theme.view.webView}
          margin="0 auto"
        >
          <Box>
            {keyItems.map((search) => (
              <Box key={search.id}>
                <Box paddingTop="23px">
                  <Button
                    textAlign="left"
                    width="100%"
                    fontSize="15px"
                    css={css`
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    `}
                    onClick={() => {
                      makeLocalStorageKeywords(search.title);
                      router.push(search.link);
                    }}
                  >
                    {search.title.substring(
                      0,
                      search.searchedTextLocationStart,
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
    </>
  );
}
