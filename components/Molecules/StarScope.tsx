import { useState } from 'react';

import StarBlack from 'assets/archive/StarBlack';
import StarWhite from 'assets/archive/StarWhite';
import { Box, Button, FlexBox, Layout } from 'components/Atoms';

export default function StarScope({
  onChange,
  currentStep,
}: {
  onChange?: (e: number) => void;
  currentStep?: number;
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Box>
      <FlexBox justifyContent="center">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <Button
              margin="0px 5px"
              type="button"
              key={index}
              onClick={() => {
                setRating(index);
                onChange && onChange(index);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              {currentStep ? (
                index <= currentStep ? (
                  <StarBlack
                    width="30.645px"
                    height="29.143px"
                    viewBox="0 0 30.645 29.143"
                  />
                ) : (
                  <StarWhite />
                )
              ) : index <= (hover || rating) ? (
                <StarBlack
                  width="30.645px"
                  height="29.143px"
                  viewBox="0 0 30.645 29.143"
                />
              ) : (
                <StarWhite />
              )}
            </Button>
          );
        })}
      </FlexBox>
    </Box>
  );
}
