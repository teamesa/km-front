export type moduleNames = 'KEY_VISUAL' | 'SWIPE_ITEM' | 'MONTHLY_FREE_ITEM';

export type ModuleResponse = {
  modules: ModuleData[];
};

export type ModuleData = {
  moduleName: moduleNames;
  index: number;
  data: KeyVisualProps | SwipeItemProps | MonthlyFreeItemProps;
};

export type HomeListProps = {
  data: {
    keyVisualDatas: {
      keyVisualPhotoUrl: string;
      upperTitle: string;
      lowerTitle: string;
      link?: string;
    }[];
  };
  index: number;
  moduleName: 'KEY_VISUAL';
};

export type KeyVisualProps = {
  index: number;
  keyVisualDatas: {
    keyVisualPhotoUrl: string;
    upperTitle: string;
    lowerTitle: string;
    link?: string;
  }[];
};

export type SwipeItemProps = {
  index: number;
  thumbnailPhotoUrl: string;
  photoUrls: string[];
  title: {
    text: string;
    link: string;
  };
  content: {
    text: string;
    link: string;
  };
  keywords: string[];
};

export type MonthlyFreeItemProps = {
  index: number;
  topTitle?: string;
  bottomTitle?: string;
  contents: MonthlyFreeItemCardProps[];
};

export type MonthlyFreeItemCardProps = {
  id: number;
  presentationImage: {
    url: string;
    link: string;
  };
  title: {
    text: string;
    link: string;
  };
  listItemAdditionalInfo: {
    archiveCount: number;
    grade: number;
    heartCount: number;
  };
  heart: { heartClicked: boolean; id: number; link: string };
  typeBadge: { text: string; typeBadge: boolean };
};
