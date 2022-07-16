import { Controller } from 'react-hook-form';

import StarScope from 'components/Molecules/StarScope';

export default function Rating({
  name,
  control,
  onChange,
  rules,
}: {
  name: string;
  control: any;
  onChange?: (e: any) => void;
  rules: any;
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange: _onChange } }) => (
        <>
          <StarScope
            onChange={(e) => {
              onChange && onChange(e);
              _onChange(e);
            }}
          />
        </>
      )}
    ></Controller>
  );
}
