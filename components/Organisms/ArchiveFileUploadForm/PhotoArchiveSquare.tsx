import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import { WhiteClose } from 'assets/archive/WhiteClose';
import { Box, Button } from 'components/Atoms';
import {
  ArchiveSquareState,
  ArchiveSqureStateEnum,
} from 'states/archive-square';
import theme from 'styles/theme';
export default function PhotoArchiveSquare({
  src,
  squareId,
}: {
  src: string;
  squareId: number;
}) {
  const setArchiveSquareState = useSetRecoilState(ArchiveSquareState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setArchiveSquareState((archiveSquareState) => {
      const filteredSquares = archiveSquareState
        .filter(({ key }) => key !== squareId)
        .filter(
          ({ pictureSrc, state }) =>
            pictureSrc !== undefined && state === ArchiveSqureStateEnum.photo,
        )
        .map((square, index) => ({
          ...square,
          key: index,
        }));

      const blankSquares =
        filteredSquares.length === 1
          ? [{ key: 2, state: ArchiveSqureStateEnum.empty }]
          : [];

      return [
        ...filteredSquares,
        {
          key: filteredSquares.length,
          state: ArchiveSqureStateEnum.input,
        },
        ...blankSquares,
      ];
    });
  };
  return (
    <Box
      width="111px"
      height="111px"
      backgroundColor={theme.colors.gray99}
      position="relative"
    >
      <Image width="111px" height="111px" alt="picture" src={src}></Image>
      <Button
        width="20px"
        height="20px"
        position="absolute"
        top="0px"
        right="0px"
        backgroundColor={theme.colors.black}
        onClick={onClick}
      >
        <WhiteClose />
      </Button>
    </Box>
  );
}
