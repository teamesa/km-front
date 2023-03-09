import { useEffect, useState } from 'react';

import StarBlack from 'assets/archive/StarBlack';
import StarWhite from 'assets/archive/StarWhite';
import { Box, Button, FlexBox } from 'components/Atoms';

export default function StarScope({
  onChange,
  currentStep,
  height,
  width,
  margin,
  userRating,
}: {
  onChange?: (e: number) => void;
  currentStep?: number;
  height?: string;
  width?: string;
  margin?: string;
  userRating?: number;
}) {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(userRating ?? 5);
  }, [userRating]);

  return (
    <Box>
      <FlexBox justifyContent="center">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <Button
              margin={margin ? margin : '0px 5px'}
              type="button"
              key={index}
              onClick={() => {
                setHover(index);
                setRating(index);
                onChange && onChange(index);
              }}
            >
              {currentStep ? (
                index <= currentStep ? (
                  <StarBlack
                    width={width ? width : '30.645px'}
                    height={height ? height : '29.143px'}
                    viewBox="0 0 30.645 29.143"
                  />
                ) : (
                  <StarWhite
                    width={width ? width : '30.645px'}
                    height={height ? height : '29.143px'}
                  />
                )
              ) : index <= (hover || rating) ? (
                <StarBlack
                  width={width ? width : '30.645px'}
                  height={height ? height : '29.143px'}
                  viewBox="0 0 30.645 29.143"
                />
              ) : (
                <StarWhite
                  width={width ? width : '30.645px'}
                  height={height ? height : '29.143px'}
                />
              )}
            </Button>
          );
        })}
      </FlexBox>
    </Box>
  );
}
