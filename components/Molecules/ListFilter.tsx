import { Button, FlexBox } from 'components/Atoms';

interface ListFilterProps {
  title: string;
  icon: React.ReactNode;
}

export default function ListFilter({ title, icon }: ListFilterProps) {
  return (
    <FlexBox
      padding="12px 20px"
      justifyContent="space-between"
      border="1px solid #dddddd"
    >
      {title}
      <Button>{icon}</Button>
    </FlexBox>
  );
}
