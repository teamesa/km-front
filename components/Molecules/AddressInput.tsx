import { useState } from 'react';
import { Controller } from 'react-hook-form';

import { Input } from 'components/Atoms';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function AddressInput({
  name,
  type,
  control,
  onChange,
}: {
  name: string;
  type: string;
  control: any;
  onChange?: (e: any) => void;
}) {
  const { onModal } = useModal();
  const [placeAddress, setPlaceAddress] = useState('');

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: _onChange } }) => (
        <>
          {placeAddress ? (
            <Input
              readOnly
              padding="12px 15px"
              border={`1px solid ${theme.colors.grayBB}`}
              backgroundColor={theme.colors.grayEE}
              color={theme.colors.gray77}
              placeholder="인수 장소 검색"
              onClick={() =>
                onModal({
                  type: 'SearchMap',
                  payload: {
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
              value={placeAddress}
              onChange={_onChange}
            />
          ) : (
            <Input
              readOnly
              name={name}
              padding="12px 15px"
              border={`1px solid ${theme.colors.grayBB}`}
              backgroundColor={theme.colors.white}
              placeholder="장소찾기를 선택해 추가해주세요."
              onClick={() =>
                onModal({
                  type: 'SearchMap',
                  payload: {
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
              value={placeAddress}
              onChange={onChange}
            />
          )}
        </>
      )}
    ></Controller>
  );
}
