import { useSetRecoilState, useRecoilState } from 'recoil';

import { Box, Button, FlexBox, Layout } from 'components/Atoms';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import { SelectProps } from 'constants/type/modal';
import { getList, listState } from 'states/list';
import { listRequest } from 'states/list-request';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal({ payload }: { payload: SelectProps }) {
  const { offModal } = useModal();
  const data = payload?.data ?? [];
  const [listRequestBody, setListRequest] = useRecoilState(listRequest);
  const setListData = useSetRecoilState(listState);
  const sort = listRequestBody.searchSortType;

  const setCategoryList = async (value: string) => {
    const newListRequestBody = {
      ...listRequestBody,
      searchSortType: value,
    };
    setListRequest(newListRequestBody);
    const data = await getList(newListRequestBody);
    setListData(data);
  };

  return (
    <ModalLayout>
      <Layout padding="30px 0px 10px !important">
        {data.map((item, index) => (
          <Layout key={index} overflow="auto" height="auto">
            <Button
              width="100%"
              paddingBottom="30px"
              fontSize="13px"
              onClick={() => {
                payload.onChange &&
                  payload.onChange({
                    target: { value: item.value },
                  });
                setCategoryList(item.value);
                offModal();
                setTimeout(() => {
                  setCategoryList(item.value);
                }, 700);
              }}
            >
              <FlexBox>
                <Box
                  color={
                    sort === item.value
                      ? `${theme.colors.black}`
                      : `${theme.colors.gray99}`
                  }
                  flex={1}
                >
                  {item.label}
                </Box>
              </FlexBox>
            </Button>
          </Layout>
        ))}
      </Layout>
    </ModalLayout>
  );
}
