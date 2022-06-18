import { Controller } from 'react-hook-form';

import { Button, Input } from 'components/Atoms';
import theme from 'styles/theme';
import changeColorSVG from 'utils/changeColorSVG';
import { useModal } from 'utils/hooks/useModal';

export default function AddressInput({
  name,
  control,
  onChange,
}: {
  name: string;
  control?: any;
  onChange?: (e: any) => void;
}) {
  const { onModal } = useModal();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange: _onChange } }) => (
        <Button type="button" width="100%">
          <Input
            readOnly
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
                    _onChange(e.road_address_name || e.address_name);
                  },
                },
              })
            }
            value={value}
            onChange={_onChange}
          />
        </Button>
      )}
    ></Controller>
  );
}
