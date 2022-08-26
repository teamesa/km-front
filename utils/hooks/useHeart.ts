import { AxiosResponse } from 'axios';

import { PresentationHeart } from 'states/list';
import customAxios from 'utils/hooks/customAxios';

type PickStatus = {
  content: boolean;
};
export function useHeart({
  heart,
  setPickState,
}: {
  heart: PresentationHeart;
  setPickState: any;
}) {
  const setToPick = async () => {
    const axios = customAxios();
    const url = `${heart.link}${!heart.heartClicked}`;

    try {
      console.log('sdf');
      const axiosData = (await axios({
        url,
        method: 'PUT',
      })) as AxiosResponse<PickStatus>;

      if (axiosData.data.content !== undefined) {
        setPickState((val: { contents: any[] }) => {
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
  return { setToPick };
}
