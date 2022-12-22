import FlexBox from 'components/Atoms/FlexBox';

export default function NoItemBox({
  width,
  height,
  text = '',
  textColor = '',
}: {
  width: string;
  height: string;
  text?: string;
  textColor: string;
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
    >
      {text}
    </FlexBox>
  );
}
