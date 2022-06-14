import { Button, FlexBox } from 'components/Atoms';
import theme from 'styles/theme';

interface ListFilterProps {
  title: string;
  icon: JSX.Element;
}

export default function ListFilter({ title, icon }: ListFilterProps) {
  return (
    <FlexBox
      padding="0px 20px"
      lineHeight="38px"
      justifyContent="space-between"
      border={`1px solid ${theme.colors.grayDD}`}
      fontSize="12px"
    >
      {title}
      <Button>{icon}</Button>
    </FlexBox>
  );
}
