import FlexBox from 'components/Atoms/FlexBox';
import theme from 'styles/theme';

export default function NoItemBox({
  width,
  height,
  text = '',
}: {
  width: string;
  height: string;
  text?: string;
}) {
  return (
    <FlexBox
      width={width}
      height={height}
      alignItems="center"
      justifyContent="center"
      fontSize="19px"
      textAlign="center"
      color={theme.colors.gray77}
    >
      {text}
    </FlexBox>
  );
}
