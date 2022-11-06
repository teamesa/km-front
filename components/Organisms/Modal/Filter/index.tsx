import { useRecoilState, useSetRecoilState } from 'recoil';

import { Box, Button, FlexBox, Layout } from 'components/Atoms';
import { FilterSelectGroup } from 'components/Organisms/Modal/Filter/FilterSelectGroup';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import {
  filter,
  filterType,
  makeEmtpyFilterOption,
  makeRequestFilterOptionBySearchFilterSelectGroup,
  setFilterState,
} from 'states/filter';
import { getList, listState } from 'states/list';
import { listRequest } from 'states/list-request';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function FilterModal() {
  const { offModal } = useModal();
  const data = filterType;
  const [listRequestState, setListhRequestState] = useRecoilState(listRequest);
  const [filters, setFilters] = useRecoilState(filter);
  const setPostList = useSetRecoilState(listState);
  const setFilter = useSetRecoilState(setFilterState);
  return (
    <ModalLayout>
      <Layout padding="30px 15px !important" maxHeight="555px" overflow="auto">
        {data.map((item, index) => (
          <FilterSelectGroup filterGroup={item} key={index} />
        ))}
        <FlexBox margin="0px -2.5px">
          <Button
            margin="0px 2.5px"
            width="50%"
            fontSize="16px"
            lineHeight="50px"
            fontWeight="500"
            border={`1px solid ${theme.colors.grayAA}`}
            onClick={async () => {
              const newFilter = makeEmtpyFilterOption();
              const newListRequest =
                makeRequestFilterOptionBySearchFilterSelectGroup(
                  newFilter,
                  listRequestState,
                );
              setFilters(newFilter);
              setListhRequestState(newListRequest);
              const data = await getList(newListRequest);
              setPostList(data);
              setFilter(false);
              offModal();
            }}
          >
            초기화
          </Button>
          <Button
            margin="0px 2.5px"
            width="50%"
            color={theme.colors.white}
            fontSize="16px"
            lineHeight="50px"
            fontWeight="500"
            backgroundColor={theme.colors.black}
            onClick={async () => {
              const newListRequest =
                makeRequestFilterOptionBySearchFilterSelectGroup(
                  filters,
                  listRequestState,
                );
              setListhRequestState(newListRequest);
              const data = await getList(newListRequest);
              setPostList(data);
              setFilter(true);
              offModal();
            }}
          >
            적용
          </Button>
        </FlexBox>
        <Box width="100%" height="var(--platformBottomArea)" />
      </Layout>
    </ModalLayout>
  );
}
