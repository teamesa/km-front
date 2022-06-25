import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Box, FlexBox, Tag } from 'components/Atoms';
import { ListState } from 'states';
import { searchRequest } from 'states/filter';
import { getList } from 'states/list';
import theme from 'styles/theme';

export default function ListCategory({
  data,
}: {
  data: { label: string; value: string }[];
}) {
  const [searchRequestBody, setSearchReques] = useRecoilState(searchRequest);
  const setListData = useSetRecoilState(ListState);
  const filter = searchRequestBody.filterOptions.exhibitionType;

  const setCategoryList = async (value: string) => {
    const newSearchRequestBody = {
      ...searchRequestBody,
      filterOptions: {
        ...searchRequestBody.filterOptions,
        exhibitionType: value,
      },
    };
    setSearchReques(newSearchRequestBody);
    const data = await getList(newSearchRequestBody);
    setListData(data);
  };

  return (
    <>
      {data.map(({ label, value }, index) => (
        <Tag
          key={index}
          color={
            filter === value
              ? `${theme.colors.black}`
              : `${theme.colors.gray99}`
          }
          display="inline-block"
          marginRight="0px !important"
          padding="0px 15px !important"
          fontSize="13px !important"
          lineHeight="45px !important"
          onClick={() => {
            setCategoryList(value);
          }}
          css={css`
            cursor: pointer;
          `}
        >
          {label}
        </Tag>
      ))}
    </>
  );
}
