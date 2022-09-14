import { Controller } from 'react-hook-form';

import StarScope from 'components/Molecules/StarScope';

export default function Rating({
  name,
  control,
  onChange,
}: {
  name: string;
  control: any;
  onChange?: (e: any) => void;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: _onChange } }) => (
        <StarScope
          currentStep={5}
          onChange={(e) => {
            onChange && onChange(e);
            _onChange(e);
          }}
        />
      )}
    ></Controller>
  );
}
