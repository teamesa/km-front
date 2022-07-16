import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Search } from 'assets/archive/Search';
import { Box, Button, FlexBox, Input } from 'components/Atoms';
import theme from 'styles/theme';

export default function SearchTitle() {
  const { register, handleSubmit } = useForm<{ search: string }>();
  const [data, setData] = useState();

  const onSubmit = (data: { search: string }) => {
    console.log('searchdata');
  };

  return (
    <Box fontSize="13px" marginTop="40px" paddingBottom="30px">
      다녀온 문화생활을 검색해주세요.
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexBox
          marginTop="10px"
          border={`solid 1px ${theme.colors.grayDD}`}
          padding="12px 15px 11px"
        >
          <Input
            type="search"
            placeholder="입력해주세요"
            width="100%"
            {...register('search', { required: true })}
          />

          <Button height="17px">
            <Search />
          </Button>
        </FlexBox>
      </form>
    </Box>
  );
}
