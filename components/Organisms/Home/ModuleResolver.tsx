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
    case 'key-visual':
      const { index: keyVisualIndex, keyvisualDatas } = data as KeyVisualProps;
      return (
        <KeyVisual index={keyVisualIndex} keyvisualDatas={keyvisualDatas} />
      );
    case 'swipe-item':
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
    case 'monthly-free-item':
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
  }
}
