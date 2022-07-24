import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { Box, RadioLabel } from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import { searchRequest, SelectInterface, TPostFilter } from 'states/filter';
import theme from 'styles/theme';

const getFilterCurrValue = (
  { filterOptions: { feeTypes, progressTypes, regionTypes } }: TPostFilter,
  { label }: SelectInterface,
): boolean => {
  const select = new Map<string, SelectInterface>();
  [...feeTypes, ...progressTypes, ...regionTypes].forEach((it) =>
    select.set(it.label, it),
  );
  return select.get(label)?.status ?? false;
};

const makeNewSearchRequest = (
  filter: SelectInterface,
  exValue: TPostFilter,
): TPostFilter => {
  const { feeTypes, progressTypes, regionTypes } = exValue.filterOptions;
  const select = new Map<string, SelectInterface>();
  const newFeeTypes: SelectInterface[] = [];
  const newProgressTypes: SelectInterface[] = [];
  const newRegionTypes: SelectInterface[] = [];

  [...feeTypes, ...progressTypes, ...regionTypes].forEach((it) =>
    select.set(it.label, it),
  );
  const newFilter = {
    ...filter,
    status: !select?.get(filter.label)?.status ?? false,
  };
  select.set(filter.label, newFilter);
  Array.from(select.values()).forEach((it) => {
    switch (it.group) {
      case 'feeTypes':
        newFeeTypes.push(it);
        break;
      case 'progressTypes':
        newProgressTypes.push(it);
        break;
      case 'regionTypes':
        newRegionTypes.push(it);
        break;
    }
  });

  return {
    ...exValue,
    filterOptions: {
      exhibitionType: exValue.filterOptions.exhibitionType,
      feeTypes: newFeeTypes,
      progressTypes: newProgressTypes,
      regionTypes: newRegionTypes,
    },
  };
};

export function FilterSelect({ filter: list }: { filter: SelectInterface }) {
  const [requestStatus, setRequestStatus] = useRecoilState(searchRequest);
  const currValue = getFilterCurrValue(requestStatus, list);
  return (
    <Box height="20px" marginBottom="20px" flex="0 0 50%">
      <CheckBox
        type="checkbox"
        id={list.value}
        css={css`
          margin: 0px !important;
        `}
        checked={currValue}
        onChange={() =>
          setRequestStatus((exValue) => makeNewSearchRequest(list, exValue))
        }
      />
      <RadioLabel
        htmlFor={list.value}
        css={css`
          margin: 0px 0px 0px 10px !important;
          color: ${theme.colors.gray99};
          font-size: 13px;
          line-height: 20px;
          font-weight: 500;
        `}
      >
        {list.label}
      </RadioLabel>
    </Box>
  );
}
