import { Box, Button, FlexBox } from 'components/Atoms';
import { SelectProps } from 'constants/type/select';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal({ payload }: { payload: SelectProps }) {
  const { offModal } = useModal();
  const data = payload?.data ?? [];

  return (
    <Box
      role="list"
      aria-label={payload.label ?? payload.placeholder ?? payload.name}
      borderRadius="24px 24px 0 0"
      position="absolute"
      width="100%"
      height="auto"
      maxHeight="70%"
      minHeight="30%"
      bottom="0px"
      background="white"
      overflow="auto"
    >
      {/* <ModalHeader
        title={payload.label ?? payload.name}
        headerLeftAction={offModal}
      /> */}
      <Box position="relative" height="auto">
        {/* {data.map((item, index) => (
          <WrapLayout
            role="listitem"
            overflow="auto"
            height="auto"
            key={item.value}
            borderBottom={
              index !== data.length - 1 ? 'solid 2px var(--grey-100)' : ''
            }
          >
            <Button
              width="100%"
              height="48px"
              textAlign="left"
              fontSize="17px"
              onClick={() => {
                payload.onChange &&
                  payload.onChange({
                    target: { value: item.value, name: payload.name ?? '' },
                  });
                offModal();
              }}
            >
              <FlexBox>
                <Box flex={1}>{item.label}</Box>
                {item.value === payload.value && <Checked />}
              </FlexBox>
            </Button>
          </WrapLayout>
        ))} */}
        sdf
      </Box>
    </Box>
  );
}
