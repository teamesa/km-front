import { FlexBox, Box } from 'components/Atoms';

interface DescriptionInfoProps {
  title: string;
  description: string[];
}

export default function DescriptionInfo({
  title,
  description,
}: DescriptionInfoProps) {
  return (
    <FlexBox marginBottom="20px" fontSize="13px">
      <Box flex={0.5}>{title}</Box>
      <Box flex={2}>
        {description.map((item, index) => (
          <Box key={index}>{item}</Box>
        ))}
      </Box>
    </FlexBox>
  );
}
