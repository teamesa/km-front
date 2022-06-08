import 'react-kakao-maps-sdk';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, FlexBox, Span, Input, Layout } from 'components/Atoms';
import ModalHeader from 'components/Molecules/ModalHeader';
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

function FindMapManual() {
  return (
    <Box fontSize="13px" color={theme.colors.black}>
      <Box marginTop="30px" fontWeight={500}>
        TIP
      </Box>
      <Box marginTop="10px" color={theme.colors.gray77}>
        해당 장소의 정확한 상호명으로 검색해주세요.
      </Box>
    </Box>
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
      position="absolute"
      width="100%"
      height="260px"
      top="30vh"
      background={theme.colors.white}
      overflow="auto"
      flexDirection="column"
    >
      <FlexBox
        width="100%"
        height="49px"
        alignItems="center"
        justifyContent="space-between"
        padding="20px 15px"
        borderBottom={`1px solid ${theme.colors.grayEE}`}
        position="fixed"
        backgroundColor={theme.colors.white}
      >
        <Box fontSize="16px" fontWeight={500}>
          다녀온 장소 찾기
        </Box>
        <Button fontSize="13px" onClick={offModal}>
          닫기
        </Button>
      </FlexBox>
      <Box padding="30px 15px" marginTop="60px">
        <FlexBox
          border={`1px solid ${theme.colors.grayDD}`}
          padding="12px 15px"
        >
          <Input
            placeholder="예) 스타벅스, 빠레트한남, 맘스터치"
            color={theme.colors.grayDD}
          />
          <Box>ICON</Box>
        </FlexBox>
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
      </Box>
    </FlexBox>
  );
}
