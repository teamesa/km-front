import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Box, Button } from 'components/Atoms';
import { getSearchTitle } from 'states/search';
import theme from 'styles/theme';

interface AutoContents {
  id: number;
  link: string;
  searchedTextLocationEnd: number;
  searchedTextLocationStart: number;
  title: string;
}

export default function SearchTitle({
  keyword,
  change,
}: {
  keyword: string;
  change: boolean;
}) {
  const router = useRouter();
  const [keyItems, setKeyItems] = useState<AutoContents[]>([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword && change) {
        const updateData = async () => {
          const searchData = await getSearchTitle({ query: keyword });
          setKeyItems(searchData.contents);
        };
        updateData();
      }
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [change, keyword]);

  return (
    <>
      {keyItems?.length > 0 && keyword && (
        <Box
          zIndex="3"
          width="100%"
          height="100%"
          overflowY="scroll"
          backgroundColor={theme.colors.white}
          position="fixed"
          top="52px"
          padding="12px 15px"
        >
          <Box>
            {keyItems.map((search) => (
              <Box key={search.id}>
                <Box paddingTop="23px">
                  <Button
                    textAlign="left"
                    onClick={() => {
                      router.push(search.link);
                    }}
                  >
                    {search.title}
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
