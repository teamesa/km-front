import { FlexBox, Box } from 'components/Atoms';

interface DescriptionInfoProps {
  title: string;
  description?: string | React.ReactNode;
}

export default function DescriptionInfo({
  title,
  description,
}: DescriptionInfoProps) {
  return (
    <FlexBox marginBottom="20px" fontSize="13px">
      <Box flex="0 0 75px" fontWeight="500" lineHeight="20px">
        {title}
      </Box>
      <Box lineHeight="20px">{description}</Box>
    </FlexBox>
  );
}
