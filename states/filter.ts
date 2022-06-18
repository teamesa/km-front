import { atom } from 'recoil';

export type TPostFilter = {
  filterOptions: filterOptionsInterface;
  queryString: '';
};

export type filterOptionsInterface = {
  exhibitionType: string;
  feeTypes: string[] | [];
  progressTypes: string[] | [];
  regionTypes: string[] | [];
};

export const FilterOptions = atom<filterOptionsInterface>({
  key: 'FilterState',
  default: {
    exhibitionType: '',
    feeTypes: [],
    progressTypes: [],
    regionTypes: [],
  },
});
