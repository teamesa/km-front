import KeyVisual from 'components/Organisms/Home/Module/KeyVisual';
import MonthlyFreeItem from 'components/Organisms/Home/Module/MonthlyFreeItem';
import SwipeItem from 'components/Organisms/Home/Module/SwipeItem';
import {
  KeyVisualProps,
  ModuleData,
  MonthlyFreeItemProps,
  SwipeItemProps,
} from 'components/Organisms/Home/ModuleTypes';

export default function ModuleResolver({ moduleName, data }: ModuleData) {
  switch (moduleName) {
    case 'KEY_VISUAL':
      const { index: keyVisualIndex, keyVisualDatas } = data as KeyVisualProps;
      return (
        <KeyVisual index={keyVisualIndex} keyVisualDatas={keyVisualDatas} />
      );
    case 'SWIPE_ITEM':
      const {
        index: SwipeItemIndex,
        thumbnailPhotoUrl,
        photoUrls,
        title,
        content,
        keywords,
      } = data as SwipeItemProps;
      return (
        <SwipeItem
          index={SwipeItemIndex}
          thumbnailPhotoUrl={thumbnailPhotoUrl}
          photoUrls={photoUrls}
          title={title}
          content={content}
          keywords={keywords}
        />
      );
    case 'MONTHLY_FREE_ITEM':
      const {
        index: MonthlyFreeItemIndex,
        topTitle,
        bottomTitle,
        contents,
      } = data as MonthlyFreeItemProps;
      return (
        <MonthlyFreeItem
          index={MonthlyFreeItemIndex}
          topTitle={topTitle}
          bottomTitle={bottomTitle}
          contents={contents}
        />
      );
    default:
      return <div>error</div>;
  }
}
