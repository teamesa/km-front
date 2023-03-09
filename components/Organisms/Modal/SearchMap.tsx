import 'react-kakao-maps-sdk';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Close } from 'assets/archive/Close';
import { Search } from 'assets/archive/Search';
import { Box, Button, FlexBox, Span, Input, Layout } from 'components/Atoms';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

interface MapType {
  data: kakao.maps.services.PlacesSearchResult;
  status: kakao.maps.services.Status;
  _pagination: {
    totalCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    current: number;
    gotoPage: (page: number) => void;
    gotoFirst(): void;
    gotoLast(): void;
    nextPage(): void;
    prevPage(): void;
  };
}
function SearchMapManual() {
  return (
    <Layout fontSize="13px">
      <Box fontWeight={500}>TIP</Box>
      <Box marginTop="10px" color={theme.colors.gray77}>
        해당 장소의 정확한 상호명으로 검색해주세요
      </Box>
    </Layout>
  );
}

export default function SearchMap({
  payload,
}: {
  payload: {
    title: string;
    onChange?: (e: kakao.maps.services.PlacesSearchResultItem) => void;
  };
}) {
  const { offModal } = useModal();
  const { register, handleSubmit } = useForm<{ search: string }>();
  const ps = new kakao.maps.services.Places();

  const [data, setData] = useState<MapType>();

  const onSubmit = (data: { search: string }) => {
    ps.keywordSearch(data.search, (data, status, _pagination) => {
      setData({
        data,
        status,
        _pagination,
      });
    });
  };

  return (
    <FlexBox
      position="absolute"
      width="100%"
      height="652px"
      bottom="0px"
      background="white"
      overflow="auto"
      flexDirection="column"
    >
      <FlexBox
        padding="20px 15px"
        justifyContent="space-between"
        borderBottom={`1px solid ${theme.colors.grayEE}`}
      >
        <Box fontWeight={500}>{payload.title}</Box>
        <Button
          type="button"
          onClick={() => {
            offModal();
          }}
        >
          <Close />
        </Button>
      </FlexBox>
      <Layout>
        <Box margin="4px 0 8px" position="relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FlexBox
              marginTop="30px"
              marginBottom="20px"
              padding="12px 37px 12px 15px"
              border={`1px solid ${theme.colors.grayDD}`}
            >
              <Input
                placeholder="예) 스타벅스, 빠레트한남, 맘스터치"
                {...register('search', { required: true })}
                type="search"
              />
              <Button
                position="absolute"
                right="15px"
                width="15px"
                type="submit"
              >
                <Search />
              </Button>
            </FlexBox>
          </form>
        </Box>
      </Layout>
      {data ? (
        <Box flex={1} overflow="auto">
          <Box>
            {data.data?.length ? (
              data.data?.map((item) => (
                <Button
                  width="100%"
                  textAlign="left"
                  key={item.id}
                  onClick={() => {
                    payload?.onChange && payload.onChange(item);
                    offModal();
                  }}
                >
                  <Box
                    fontSize="13px"
                    borderBottom={`1px solid ${theme.colors.grayEE}`}
                  >
                    <Layout margin="20px 0">
                      <Box fontWeight={600} marginBottom="11px">
                        {item.place_name}
                      </Box>
                      <Box fontSize="12px">{item.address_name}</Box>
                      <Box fontSize="12px">
                        {item.road_address_name ?? null}
                      </Box>
                    </Layout>
                  </Box>
                </Button>
              ))
            ) : (
              <Layout>
                <Box fontSize="14px" marginTop="24px" textAlign="center">
                  검색 결과가 없습니다.
                </Box>
              </Layout>
            )}
          </Box>
        </Box>
      ) : (
        <SearchMapManual />
      )}
    </FlexBox>
  );
}
