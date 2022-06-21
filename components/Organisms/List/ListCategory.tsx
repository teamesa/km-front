import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Box, FlexBox, Tag } from 'components/Atoms';
import { FilterOptions, ListState } from 'states';
import { getList } from 'states/list';
import theme from 'styles/theme';

export default function ListCategory({
  data,
}: {
  data: { label: string; value: string }[];
}) {
  const [filterOptions, setFilterOptions] = useRecoilState(FilterOptions);
  const setListData = useSetRecoilState(ListState);
  const filter = filterOptions.exhibitionType;

  const setCategoryList = async (value: string) => {
    const newFilterOpions = {
      ...filterOptions,
      exhibitionType: value,
    };
    setFilterOptions(newFilterOpions);
    const data = await getList(newFilterOpions);
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
          fontSize="13px !important"
          lineHeight="45px !important"
          marginRight="15px"
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
