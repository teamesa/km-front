import { useSetRecoilState, useRecoilState } from 'recoil';

import { Box, Button, FlexBox, Layout } from 'components/Atoms';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import { SelectProps } from 'constants/type/modal';
import { ListState } from 'states';
import { getList } from 'states/list';
import { searchRequest } from 'states/search-request';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal({ payload }: { payload: SelectProps }) {
  const { offModal } = useModal();
  const data = payload?.data ?? [];
  const [searchRequestBody, setSearchReques] = useRecoilState(searchRequest);
  const setListData = useSetRecoilState(ListState);
  const sort = searchRequestBody.searchSortType;

  const setCategoryList = async (value: string) => {
    const newSearchRequestBody = {
      ...searchRequestBody,
      searchSortType: value,
    };
    setSearchReques(newSearchRequestBody);
    const data = await getList(newSearchRequestBody);
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
                // setCategoryList(item.value);
                payload.onChange &&
                  payload.onChange({
                    target: { value: item.value },
                  });
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
