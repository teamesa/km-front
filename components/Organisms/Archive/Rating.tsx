import { Controller } from 'react-hook-form';

import StarScope from 'components/Molecules/StarScope';

export default function Rating({
  name,
  control,
  onChange,
  userRating,
}: {
  name: string;
  control: any;
  onChange?: (e: any) => void;
  userRating: number;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: _onChange } }) => (
        <StarScope
          onChange={(e) => {
            onChange && onChange(e);
            _onChange(e);
          }}
          userRating={userRating}
        />
      )}
    ></Controller>
  );
}
