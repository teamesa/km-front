import type { NextPage } from 'next';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, FlexBox, Layout, Tag } from 'components/Atoms';
import Select from 'components/Atoms/Select';
import ListFilter from 'components/Molecules/ListFilter';
import ListCategory from 'components/Organisms/List/ListCategory';
import { ResponseState, TestSate } from 'states';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', headerEnd: 'home' });
  const data = useRecoilValue(TestSate);
  const setResponseState = useSetRecoilState(ResponseState);

  /** POST로 보내는 예시 */
  const handleTest = async (e: any) => {
    e.preventDefault();

    const data = 'test';
    const axios = customAxios();
    try {
      const response = await axios({
        url: '/hello-example',
        method: 'POST',
        data,
      });
      console.log('response', response);
      setResponseState(response);
    } catch (e: any) {
      console.log('error', e.response);
    }
  };
  // 정렬레이어 팝업
  const exampleSelect = [
    { index: 0, label: 'test1', value: '010' },
    { index: 1, label: 'test2', value: '010' },
    { index: 2, label: 'test3', value: '010' },
  ];
  //상세필터 레이어
  const exampleFilter = [
    { index: 0, label: 'test1', value: '010' },
    { index: 1, label: 'test2', value: '010' },
    { index: 2, label: 'test3', value: '010' },
  ];
  return (
    <>
      <FlexBox>
        <Box flex={1}>
          <ListFilter title="조회순" icon={<ArrowDown />} />
        </Box>
        <Box flex={1}>
          <ListFilter title="조회순" icon={<ArrowDown />} />
        </Box>
      </FlexBox>
      <ListCategory
        data={[
          { label: 'ALL', value: '' },
          { label: '전시회', value: 'exhibition' },
          { label: '콘서트', value: 'concert' },
          { label: '뮤지컬', value: 'musical' },
          { label: '뮤직페스티벌', value: 'musicFestival' },
        ]}
      />
      <Layout>
        <Box margin="14px 0 10px">
          <Tag color={theme.colors.lime} background={theme.colors.black}>
            전시회
          </Tag>
          <Tag color={theme.colors.black} background={theme.colors.grayEE}>
            D-63
          </Tag>
        </Box>
        <Box>상태값 가져오기</Box>
        <Box>Post로 memo보내기</Box>
        <button onClick={handleTest}>테스트</button>
        <hr />
        <Select
          modalType="Select"
          data={exampleSelect}
          onChange={(e) => {
            e.target.value;
          }}
        />
        <Select
          modalType="Filter"
          data={exampleFilter}
          onChange={(e) => {
            e.target.value;
          }}
        />
      </Layout>
    </>
  );
};

export default Home;
