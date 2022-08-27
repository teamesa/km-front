import ListWish from 'assets/list/ListWish';
import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function PickHeart() {
  const pickClick = () => {
    console.log('click');
  };

  return (
    <>
      <Box
        position="absolute"
        top="5px"
        right="7.5px"
        height="32px"
        width="32px"
        background="rgba(0,0,0,0.6)"
        borderRadius="16px"
        zIndex="2"
        onClick={() => pickClick()}
      >
        <Box position="absolute" top="calc(50% - 7.5px)" left="calc(50% - 8px)">
          <ListWish width="16px" height="15px" fill={theme.colors.lime} />
        </Box>
      </Box>
    </>
  );
}
