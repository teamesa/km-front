import KeyVisual from 'components/Organisms/Home/Module/KeyVisual';
import MonthlyFreeItem from 'components/Organisms/Home/Module/MonthlyFreeItem';
import SwipeItem from 'components/Organisms/Home/Module/SwipeItem';
import {
  KeyVisualProps,
  ModuleData,
  MonthlyFreeItemProps,
  SwipeItemProps,
} from 'components/Organisms/Home/ModuleTypes';

export default function ModuleResolver({
  moduleName,
  index,
  data,
}: ModuleData) {
  switch (moduleName) {
    case 'KEY_VISUAL':
      const { keyVisualDatas } = data as KeyVisualProps;
      return <KeyVisual index={index} keyVisualDatas={keyVisualDatas} />;
    case 'SWIPE_ITEM':
      const { thumbnailPhotoUrl, photoUrls, title, content, keywords } =
        data as SwipeItemProps;
      return (
        <SwipeItem
          index={index}
          thumbnailPhotoUrl={thumbnailPhotoUrl}
          photoUrls={photoUrls}
          title={title}
          content={content}
          keywords={keywords}
        />
      );
    case 'MONTHLY_FREE_ITEM':
      const { topTitle, bottomTitle, contents } = data as MonthlyFreeItemProps;
      return (
        <MonthlyFreeItem
          index={index}
          topTitle={topTitle}
          bottomTitle={bottomTitle}
          contents={contents}
        />
      );
    default:
      return <div>error</div>;
  }
}
