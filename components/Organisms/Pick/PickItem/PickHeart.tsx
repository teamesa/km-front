import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

import ListWish from 'assets/list/ListWish';
import { Box } from 'components/Atoms';
import {
  pickState,
  PresentationPickHeart,
  useResetPickStateFunction,
} from 'states/pick';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

interface PickHeartProps {
  heart: PresentationPickHeart;
}

type PickStatus = {
  content: boolean;
};

export default function PickHeart({ heart }: PickHeartProps) {
  const setPickState = useSetRecoilState(pickState);
  const resetPickState = useResetPickStateFunction();

  const setPickHeart = async () => {
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
    resetPickState();
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
        onClick={setPickHeart}
      >
        <Box position="absolute" top="calc(50% - 7.5px)" left="calc(50% - 8px)">
          <ListWish width="16px" height="15px" fill={theme.colors.lime} />
        </Box>
      </Box>
    </>
  );
}
