import { useRecoilState, useSetRecoilState } from 'recoil';

import { Button, FlexBox, Layout } from 'components/Atoms';
import { filterType } from 'components/Organisms/List/ListOptionFilter';
import { FilterSelectGroup } from 'components/Organisms/Modal/Filter/FilterSelectGroup';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import { searchRequest } from 'states';
import {
  filter,
  makeEmtpyFilterOption,
  makeRequestFilterOptionBySearchFilterSelectGroup,
} from 'states/filter';
import list, { getList } from 'states/list';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal() {
  const { offModal } = useModal();
  const data = filterType;
  const [searchRequestState, setSearchRequestState] =
    useRecoilState(searchRequest);
  const [filters, setFilters] = useRecoilState(filter);
  const setPostList = useSetRecoilState(list);
  return (
    <ModalLayout>
      <Layout overflow="auto" height="auto">
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
              const newSearchRequest =
                makeRequestFilterOptionBySearchFilterSelectGroup(
                  newFilter,
                  searchRequestState,
                );
              setFilters(newFilter);
              setSearchRequestState(newSearchRequest);
              const data = await getList(newSearchRequest);
              setPostList(data);
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
              const newSearchRequest =
                makeRequestFilterOptionBySearchFilterSelectGroup(
                  filters,
                  searchRequestState,
                );
              setSearchRequestState(newSearchRequest);
              const data = await getList(newSearchRequest);
              setPostList(data);
              offModal();
            }}
          >
            적용
          </Button>
        </FlexBox>
      </Layout>
    </ModalLayout>
  );
}
