import { atom, selector } from 'recoil';

export enum ArchiveSquareStateEnum {
  'empty',
  'input',
  'loading',
  'photo',
}

export interface ArchiveSquareState {
  key: number;
  state: ArchiveSquareStateEnum;
  pictureSrc?: string;
}

const makeSquareState = (
  key: number,
  state: ArchiveSquareStateEnum,
): ArchiveSquareState => ({
  key,
  state,
});

const getDefaultSquares = (): ArchiveSquareState[] => [
  makeSquareState(0, ArchiveSquareStateEnum.input),
];

export const getSquareByUrls = (
  urls: string[] | undefined,
): ArchiveSquareState[] => {
  const square =
    urls
      ?.map((urls) => urls.trim())
      .filter((url) => url.length > 0)
      .map((url, index) => ({
        key: index,
        state: ArchiveSquareStateEnum.photo,
        pictureSrc: url,
      })) ?? [];

  if (square.length == 0) {
    const input: ArchiveSquareState = makeSquareState(
      0,
      ArchiveSquareStateEnum.input,
    );
    const firstBlank: ArchiveSquareState = makeSquareState(
      1,
      ArchiveSquareStateEnum.empty,
    );
    const secondBlank: ArchiveSquareState = makeSquareState(
      2,
      ArchiveSquareStateEnum.empty,
    );
    return [input, firstBlank, secondBlank];
  } else if (square.length == 1) {
    const input: ArchiveSquareState = makeSquareState(
      1,
      ArchiveSquareStateEnum.input,
    );
    const blank: ArchiveSquareState = {
      key: 2,
      state: ArchiveSquareStateEnum.empty,
    };
    console.log([...square, input, blank]);
    return [...square, input, blank];
  } else if (square.length == 2) {
    const input: ArchiveSquareState = {
      key: 2,
      state: ArchiveSquareStateEnum.input,
    };
    return [...square, input];
  } else {
    return square;
  }
};

export const ArchiveSquareState = atom<ArchiveSquareState[]>({
  key: 'ArchiveSquareState',
  default: selector({
    key: 'ArchiveSquareState/Default',
    get: () => getDefaultSquares(),
  }),
});
