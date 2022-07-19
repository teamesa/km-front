import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { Search } from 'assets/archive/Search';
import { Box, Button, FlexBox, Input, Span } from 'components/Atoms';
import { ArchiveSearchState, getArchiveSearch } from 'states/archiveWirte';
import theme from 'styles/theme';

interface AutoContents {
  id: number;
  link: string;
  searchedTextLocationEnd: number;
  searchedTextLocationStart: number;
  title: string;
}

export default function SearchTitle() {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<AutoContents[]>([]);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) {
        const updateData = async () => {
          const data = await getArchiveSearch({ query: keyword });
          setKeyItems(data.contents);
        };
        updateData();
      }
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <Box fontSize="13px" marginTop="40px" paddingBottom="30px">
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
        <Button height="17px">
          <Search />
        </Button>
      </FlexBox>
      {keyItems.length > 0 && keyword && (
        <Box
          zIndex="3"
          width="345px"
          height="120px"
          backgroundColor={theme.colors.white}
          position="absolute"
          top="155px"
          border={`solid 1px ${theme.colors.black}`}
          padding="12px 15px"
        >
          <Box>
            {keyItems.map((search) => (
              <Box key={search.id}>
                <Box paddingTop="23px">
                  {search.title}
                  {/* {search.title.includes(keyword) ? (
                    <Span>
                      {search.title.split(keyword)[0]}
                      <Span color={theme.colors.orange}>{keyword}</Span>
                      {search.title.split(keyword)[1]}
                    </Span>
                  ) : (
                    search.title
                  )} */}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
