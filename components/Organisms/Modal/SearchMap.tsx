import 'react-kakao-maps-sdk';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  FlexBox,
  Span,
  TextInput,
  Layout,
} from 'components/Atoms';
import ModalHeader from 'components/Molecules/ModalHeader';
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

function FindMapManual() {
  return (
    <Layout>
      <Box fontSize="14px" marginTop="24px">
        아래의 조합으로 검색하시면 보다 정확한 주소를 찾으실 수 있습니다.
      </Box>
      <Box fontSize="14px" marginTop="32px" lineHeight="1.5">
        도로명 + 건물번호
        <br />
        <Span color="var(--primary-400)">예) 황새울로 216, 백현로 206</Span>
      </Box>
      <Box fontSize="14px" marginTop="24px" lineHeight="1.5">
        지역명(동/리) + 번지
        <br />
        <Span color="var(--primary-400)">예) 수내동 11-4, 정자동 102</Span>
      </Box>
      <Box fontSize="14px" marginTop="24px" lineHeight="1.5">
        지역명(동/리) + 건물명(아파트명)
        <br />
        <Span color="var(--primary-400)">
          예) 수내동 휴맥스빌리지, 정자 한솔 주공
        </Span>
      </Box>
    </Layout>
  );
}

export default function FindMap({
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
      role="list"
      aria-label="주소 검색"
      borderRadius="24px 24px 0 0"
      position="absolute"
      width="100%"
      height="95%"
      bottom="0px"
      background="white"
      overflow="auto"
      flexDirection="column"
    >
      <ModalHeader title="주소 검색" headerLeftAction={offModal} />
      <Layout>
        <Box marginTop="4px" position="relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              placeholder="예) 황새울로 216 또는 플랫 아파트"
              {...register('search', { required: true })}
              background="white"
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
                  <Box
                    background="white"
                    fontSize="14px"
                    borderBottom="4px solid var(--grey-100)"
                  >
                    <Layout>
                      <Box
                        padding="12px 0 4px"
                        fontWeight={700}
                        borderBottom="1px solid var(--grey-100)"
                      >
                        {item.place_name}
                      </Box>
                      <Box padding="4px 0 2px">{item.address_name}</Box>
                      <Box padding="2px 0 12px">{item.road_address_name}</Box>
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
        <FindMapManual />
      )}
    </FlexBox>
  );
}
