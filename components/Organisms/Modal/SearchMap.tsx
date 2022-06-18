import 'react-kakao-maps-sdk';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, FlexBox, Span, Input, Layout } from 'components/Atoms';
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
    <Layout fontSize="13px" marginTop="24px">
      <Box fontWeight={500}>TIP</Box>
      <Box marginTop="28px">해당 장소의 정확한 상호명으로 검색해주세요</Box>
    </Layout>
  );
}

export default function SearchMap({
  payload,
}: {
  payload: {
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
      height="80vh"
      bottom="0px"
      background="white"
      overflow="auto"
      flexDirection="column"
    >
      <FlexBox padding="15px" justifyContent="space-between">
        <Box fontWeight={800}>다녀온 장소 찾기</Box>
        <Box
          onClick={() => {
            offModal();
          }}
        >
          닫기
        </Box>
      </FlexBox>
      <Layout>
        <Box margin="4px 0 8px" position="relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="예시주소 넣는곳"
              {...register('search', { required: true })}
              type="search"
            />
            <Button
              position="absolute"
              right="0px"
              width="60px"
              height="48px"
              type="submit"
            />
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
                  <Box fontSize="14px" padding="12px 0">
                    <Layout>
                      <Box
                        fontWeight={600}
                        fontSize="17px"
                        color="var(--primary-400)"
                        marginBottom="4px"
                      >
                        {item.place_name}
                      </Box>
                      <Box marginBottom="6px" fontSize="14px">
                        {item.address_name}
                      </Box>
                      <FlexBox fontSize="14px">
                        <FlexBox
                          fontSize="11px"
                          width="40px"
                          height="20px"
                          justifyContent="center"
                          alignItems="center"
                          marginRight="4px"
                        >
                          도로명
                        </FlexBox>
                        {item.road_address_name || '-'}
                      </FlexBox>
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
