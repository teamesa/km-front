import { useRecoilValue, useSetRecoilState } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import { ListState } from 'states';
import { TPostList, ListPageContents } from 'states/list';
import customAxios from 'utils/hooks/customAxios';

export default function ListSection() {
  const data = useRecoilValue(ListState);
  const setList = useSetRecoilState(ListState);

  const click = async (
    link: string,
    pickIndex: number,
    pickStatus: boolean,
  ) => {
    const axios = customAxios();
    try {
      const { data: axiosData } = await axios({
        url: link,
        method: 'PUT',
      });
      if (axiosData) {
        const newTotalContent = data.contents.map(
          (item: ListPageContents, index: number) => {
            if (index === pickIndex) {
              // return { ...item, heart: { ...item.heart, heartClicked: pickStatus } };
              const newItem = {
                presentationImage: item.presentationImage,
                typeBadge: item.typeBadge,
                additionalBadgeList: item.additionalBadgeList,
                title: item.title,
                heart: {
                  heartClicked: pickStatus,
                  link: item.heart.link,
                },
                listItemAdditionalInfo: item.listItemAdditionalInfo,
              };
              console.log(newItem.heart.heartClicked);
              return newItem;
            } else {
              return item;
            }
          },
        );

        setList({ ...data, contents: newTotalContent });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data.contents.map((content, index) => (
        <ListCard
          key={index}
          index={index}
          content={content}
          pickClicked={click}
        />
      ))}
    </>
  );
}
