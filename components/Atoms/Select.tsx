import { Button } from 'components/Atoms';
import { SelectProps } from 'constants/type/modal';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function Select(props: SelectProps) {
  const { onModal } = useModal();
  return (
    <>
      <Button
        type="button"
        width="100%"
        fontWeight={400}
        fontSize="17px"
        textAlign="left"
        background={theme.colors.white}
        onClick={() => {
          onModal({
            type: 'Select',
            payload: props,
          });
        }}
      >
        레이어 팝업예시
      </Button>
    </>
  );
}
