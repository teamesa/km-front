import { FlexBox, Box } from 'components/Atoms';

interface ItemInfoDescriptionProps {
  title: string;
  description?: any;
}

export default function ItemInfoDescription({
  title,
  description,
}: ItemInfoDescriptionProps) {
  return (
    <FlexBox marginBottom="20px" fontSize="13px">
      <Box flex="0 0 75px" fontWeight="500" lineHeight="20px">
        {title}
      </Box>
      <Box lineHeight="20px">{description}</Box>
    </FlexBox>
  );
}
