import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Button } from 'components/Atoms';
import { PresentationHeart } from 'states/list';
import theme from 'styles/theme';

type HeartProsp = {
  heart: PresentationHeart;
};

export default function ItemHeart(props: HeartProsp) {
  const heart = props.heart;
  return (
    <Button
      position="absolute"
      right="0px"
      top="0px"
      onClick={() => {
        console.log(heart.heartClicked);
        // props.pickClicked(
        //   `${heart.link}${!heart.heartClicked}`,
        //   props.index,
        //   !heart.heartClicked,
        // );
      }}
    >
      {heart.heartClicked ? (
        <NavWish width="17" height="16" fill={theme.colors.black} />
      ) : (
        <NavWish width="17" height="16" />
      )}
    </Button>
  );
}
