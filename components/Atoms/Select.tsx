import { Button } from 'components/Atoms';
import { SelectProps } from 'constants/type/select';
import { useModal } from 'utils/hooks/useModal';

export default function Select(props: SelectProps) {
  const { onModal } = useModal();
  const { name, placeholder, value, label } = props;

  return (
    <>
      <Button
        aria-label={label || placeholder || name}
        type="button"
        color={value ? 'var(--black)' : 'var(--grey-300)'}
        width="100%"
        fontWeight={400}
        height="48px"
        lineHeight="48px"
        padding="0px 12px"
        borderBottom="solid 2px var(--grey-300)"
        fontSize="17px"
        textAlign="left"
        role="listbox"
        onClick={() => {
          onModal({
            type: 'Select',
            payload: props,
          });
        }}
      >
        {value || placeholder}
      </Button>
      <input
        aria-label={label || placeholder || name}
        name={name}
        value={value}
        type="hidden"
      />
    </>
  );
}
