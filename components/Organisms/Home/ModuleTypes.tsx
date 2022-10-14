export type moduleNames = 'key-visual' | 'swipe-item' | 'monthly-free-item';

export type ModuleData = {
  moduleName: moduleNames;
  data: KeyVisualProps | SwipeItemProps | MonthlyFreeItemProps;
};

export type KeyVisualProps = {
  index: number;
  keyvisualDatas: {
    photoUrl: string;
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
