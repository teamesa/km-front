import { useRecoilState, useSetRecoilState } from 'recoil';

import { Button, FlexBox, Layout } from 'components/Atoms';
import { filterType } from 'components/Organisms/List/ListOptionFilter';
import { FilterSelectGroup } from 'components/Organisms/Modal/Filter/FilterSelectGroup';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import { searchRequest } from 'states';
import list, { getListByFilterState } from 'states/list';
import { makeEmtpyFilterOption } from 'states/search-request';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal() {
  const { offModal } = useModal();
  const data = filterType;
  const [searchRequestState, setFilter] = useRecoilState(searchRequest);
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
            onClick={() => {
              setFilter(makeEmtpyFilterOption);
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
              const data = await getListByFilterState(searchRequestState);
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
