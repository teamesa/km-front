import { atom, selector } from 'recoil';

export enum ArchiveSqureStateEnum {
  'empty',
  'input',
  'loading',
  'photo',
}

export interface ArchiveSquareState {
  key: number;
  state: ArchiveSqureStateEnum;
  pictureSrc?: string;
}

const makeSqureState = (
  key: number,
  state: ArchiveSqureStateEnum,
): ArchiveSquareState => ({
  key,
  state,
});

const getDefaultSquares = (): ArchiveSquareState[] => [
  makeSqureState(0, ArchiveSqureStateEnum.input),
];

export const ArchiveSquareState = atom<ArchiveSquareState[]>({
  key: 'ArchiveSquareState',
  default: selector({
    key: 'ArchiveSquareState/Default',
    get: () => getDefaultSquares(),
  }),
});
