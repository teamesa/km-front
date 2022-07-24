import { atom } from 'recoil';

import { SearchRequestInterface } from 'states/search-request';

export interface SearchFilterSelectGroup {
  feeTypes: SelectInterface[] | [];
  progressTypes: SelectInterface[] | [];
  regionTypes: SelectInterface[] | [];
}

export interface SelectInterface {
  index: number;
  label: string;
  value: string;
  status: boolean;
  group: 'feeTypes' | 'progressTypes' | 'regionTypes';
}

const filterByStatus = (filterArray: SelectInterface[]): string[] =>
  filterArray.filter((it) => it.status).map((it) => it.value);

export const makeRequestFilterOptionBySearchFilterSelectGroup = (
  selectGroup: SearchFilterSelectGroup,
  searchRequest: SearchRequestInterface,
): SearchRequestInterface => ({
  ...searchRequest,
  filterOptions: {
    exhibitionType: searchRequest.filterOptions.exhibitionType,
    feeTypes: filterByStatus(selectGroup.feeTypes),
    progressTypes: filterByStatus(selectGroup.progressTypes),
    regionTypes: filterByStatus(selectGroup.regionTypes),
  },
});

export const makeEmtpyFilterOption = (): SearchFilterSelectGroup => ({
  feeTypes: [],
  progressTypes: [],
  regionTypes: [],
});

export const filter = atom<SearchFilterSelectGroup>({
  key: 'searchFilter',
  default: makeEmtpyFilterOption(),
});
