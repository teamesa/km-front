import { useRecoilState } from 'recoil';

import { Box, Button, FlexBox, Layout } from 'components/Atoms';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import { SelectProps } from 'constants/type/modal';
import { searchRequest } from 'states/filter';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal({ payload }: { payload: SelectProps }) {
  const { offModal } = useModal();
  const data = payload?.data ?? [];
  const [sortOptions, setSortOptions] = useRecoilState(searchRequest);
  const sort = sortOptions.searchSortType;

  return (
    <ModalLayout>
      {data.map((item, index) => (
        <Layout key={index} overflow="auto" height="auto">
          <Button
            width="100%"
            paddingBottom="30px"
            fontSize="13px"
            color={
              sort === item.value
                ? `${theme.colors.black}`
                : `${theme.colors.gray99}`
            }
            onClick={() => {
              payload.onChange &&
                payload.onChange({
                  target: { value: item.value },
                });
              offModal();
            }}
          >
            <FlexBox>
              <Box flex={1}>{item.label}</Box>
            </FlexBox>
          </Button>
        </Layout>
      ))}
    </ModalLayout>
  );
}
