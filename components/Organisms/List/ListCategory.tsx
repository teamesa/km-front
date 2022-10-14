import { css } from '@emotion/react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Tag } from 'components/Atoms';
import { getList, listState } from 'states/list';
import { listRequest } from 'states/list-request';
import theme from 'styles/theme';

export default function ListCategory({
  data,
}: {
  data: { label: string; value: string }[];
}) {
  const [listRequestBody, setListRequest] = useRecoilState(listRequest);
  const setListData = useSetRecoilState(listState);
  const filter = listRequestBody.filterOptions.exhibitionType;

  const setCategoryList = async (value: string) => {
    const newListRequestBody = {
      ...listRequestBody,
      filterOptions: {
        ...listRequestBody.filterOptions,
        exhibitionType: value,
      },
    };
    setListRequest(newListRequestBody);
    const data = await getList(newListRequestBody);
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
