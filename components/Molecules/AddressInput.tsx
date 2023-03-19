import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import { Box, Button, FlexBox, Input } from 'components/Atoms';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function AddressInput({
  name,
  type,
  control,
  onChange,
  defaultValue,
}: {
  name: string;
  type: string;
  control: any;
  defaultValue?: string;
  onChange?: (e: any) => void;
}) {
  const { onModal } = useModal();
  const [placeAddress, setPlaceAddress] = useState(defaultValue ?? '');

  useEffect(() => {
    setPlaceAddress(defaultValue ?? '');
    return () => {
      setPlaceAddress('');
    };
  }, [defaultValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: _onChange } }) => (
        <>
          <Button
            width="100%"
            type="button"
            onClick={() =>
              onModal({
                type: 'SearchMap',
                payload: {
                  title:
                    type === 'FOOD' ? '다녀온 맛집 찾기' : '다녀온 카페 찾기',
                  onChange: (e: any) => {
                    onChange && onChange(e);
                    setPlaceAddress(e.place_name);
                    _onChange({
                      address: e.address_name,
                      name: e.place_name,
                      placeType: type,
                      roadAddress: e.road_address_name,
                    });
                  },
                },
              })
            }
          >
            <FlexBox>
              <Box width="100%" flex={1}>
                {placeAddress ? (
                  <Input
                    readOnly
                    padding="10px 15px"
                    border={`1px solid ${theme.colors.grayBB}`}
                    backgroundColor={theme.colors.grayEE}
                    color={theme.colors.gray77}
                    value={placeAddress}
                    onChange={_onChange}
                  />
                ) : (
                  <Input
                    readOnly
                    name={name}
                    padding="10px 15px"
                    border={`1px solid ${theme.colors.grayBB}`}
                    backgroundColor={theme.colors.white}
                    placeholder="장소찾기를 선택해 추가해주세요."
                    value={placeAddress}
                    onChange={onChange}
                  />
                )}
              </Box>
              <Box
                width="90px"
                height="40px"
                padding="11px 22px"
                color={theme.colors.white}
                backgroundColor={theme.colors.black}
                fontSize="12px"
                fontWeight={500}
                marginLeft="5px"
              >
                장소찾기
              </Box>
            </FlexBox>
          </Button>
        </>
      )}
    ></Controller>
  );
}
