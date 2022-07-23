import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Button } from 'components/Atoms';
import { ListState } from 'states';
import { PresentationHeart } from 'states/list';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

interface HeartProps {
  heart: PresentationHeart;
}

type PickStatus = {
  content: boolean;
};

export default function ItemHeart(props: HeartProps) {
  const heart = props.heart;
  const setPickState = useSetRecoilState(ListState);

  const setToPick = async () => {
    const axios = customAxios();
    const url = `${heart.link}${!heart.heartClicked}`;

    try {
      const axiosData = (await axios({
        url,
        method: 'PUT',
      })) as AxiosResponse<PickStatus>;

      if (axiosData.data.content !== undefined) {
        setPickState((val) => {
          const contents = val.contents.map((it) => {
            if (it.heart.id === heart.id) {
              return {
                ...it,
                heart: { ...it.heart, heartClicked: !heart.heartClicked },
              };
            } else {
              return it;
            }
          });

          return { ...val, contents };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      position="absolute"
      right="-3px"
      width="20px"
      height="20px"
      onClick={setToPick}
    >
      <NavWish
        width="17px"
        height="20px"
        viewBox="1 2 27 26"
        fill={heart.heartClicked ? theme.colors.black : theme.colors.white}
      />
    </Button>
  );
}
