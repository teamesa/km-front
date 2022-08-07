import { css } from '@emotion/react';

import { Box, FlexBox } from 'components/Atoms';
import { FilterSelect } from 'components/Organisms/Modal/Filter/FilterSelect';
import { SelectInterface } from 'states/filter';

export function FilterSelectGroup({
  filterGroup: item,
}: {
  filterGroup: {
    title: string;
    type: SelectInterface[];
  };
}) {
  return (
    <Box
      marginBottom="20px"
      css={css`
        h&:nt-last-of-type(1) {
          margin-bottom: 10px;
        }
      `}
    >
      <Box
        marginBottom="20px"
        fontSize="15px"
        fontWeight="500"
        lineHeight="19px"
      >
        {item.title}
      </Box>
      <FlexBox flexWrap="wrap">
        {item.type.map((list, index) => (
          <FilterSelect key={index} filter={list} />
        ))}
      </FlexBox>
    </Box>
  );
}
