import { useState } from 'react';
import { Controller } from 'react-hook-form';

import { Box, Button } from 'components/Atoms';
import StarScope from 'components/Molecules/StarScope';

export default function Rating({
  name,
  control,
  onChange,
}: {
  name: string;
  control?: any;
  onChange?: (e: any) => void;
}) {
  const [starRating, setStarRating] = useState(0);

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Button type="button" width="100%">
          <Button>
            <StarScope currentStep={starRating} />
          </Button>
        </Button>
      )}
    ></Controller>
  );
}
