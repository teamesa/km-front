import FlexBox from 'components/Atoms/FlexBox';

export default function NoItemBox({
  width,
  height,
  text = '',
  textColor = '',
  backgroundColor = '',
}: {
  width: string;
  height: string;
  text?: string;
  textColor?: string;
  backgroundColor?: string;
}) {
  return (
    <FlexBox
      width={width}
      height={height}
      alignItems="center"
      justifyContent="center"
      fontSize="19px"
      textAlign="center"
      color={textColor}
      backgroundColor={backgroundColor}
    >
      {text}
    </FlexBox>
  );
}
