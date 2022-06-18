import StarBlack from 'assets/archive/StarBlack';
import StarWhite from 'assets/archive/StarWhite';
import { Box, FlexBox, Layout } from 'components/Atoms';
import theme from 'styles/theme';

function StarCheck({ currentStep }: { currentStep: number }) {
  return (
    <FlexBox>
      {[...Array(5)].map((_, index) => {
        const count = index + 1;
        return (
          <Box key={index} paddingRight="10px">
            {count <= currentStep ? <StarBlack /> : <StarWhite />}
          </Box>
        );
      })}
    </FlexBox>
  );
}

export default function StarScope({ currentStep }: { currentStep: number }) {
  return (
    <Box paddingTop="16px">
      <StarCheck currentStep={currentStep} />
    </Box>
  );
}
