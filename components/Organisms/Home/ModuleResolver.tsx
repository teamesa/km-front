import MonthlyFreeItem from 'components/Organisms/Home/Module/MonthlyFreeItem';
import SwipeItem from 'components/Organisms/Home/Module/SwipeItem';
import {
  ModuleData,
  MonthlyFreeItemProps,
  SwipeItemProps,
} from 'components/Organisms/Home/ModuleTypes';

export default function ModuleResolver({ moduleName, data }: ModuleData) {
  switch (moduleName) {
    case 'swipe-item':
      const { thumbnailPhotoUrl, photoUrls, title, content, keywords } =
        data as SwipeItemProps;
      return (
        <SwipeItem
          thumbnailPhotoUrl={thumbnailPhotoUrl}
          photoUrls={photoUrls}
          title={title}
          content={content}
          keywords={keywords}
        />
      );
    case 'monthly-free-item':
      const { topTitle, bottomTitle, contents } = data as MonthlyFreeItemProps;
      return (
        <MonthlyFreeItem
          topTitle={topTitle}
          bottomTitle={bottomTitle}
          contents={contents}
        />
      );
  }
}
