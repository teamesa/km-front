export type moduleNames =
  | 'KEY_VISUAL'
  | 'SWIPE_ITEM'
  | 'MONTHLY_FREE_ITEM'
  | 'REAL_TIME_ARCHIVE';

export type ModuleResponse = {
  modules: ModuleData[];
};

export type ModuleData = {
  moduleName: moduleNames;
  index: number;
  data:
    | KeyVisualProps
    | SwipeItemProps
    | MonthlyFreeItemProps
    | RealTimeArchiveItemProps;
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

export type RealTimeArchiveItemProps = {
  index: number;
  realtimeArchiveTopTitle?: string;
  realtimeArchiveBottomTitle?: string;
  archives?: RealTimeArchiveItemCardProps[];
};

export type RealTimeArchiveItemCardProps = {
  id: number;
  introduction: {
    title: { link: string; value: string };
    places?: string;
    comment: string;
  };
  metaData: {
    user: { name: string; photoUrl?: string };
    heart: { heartClicked: boolean; link: string };
    likeCount: number;
    starRating: number;
    updatedAt: string;
    dimColor?: string;
    opacity?: string;
  };
  photo: { link: string; photoUrl?: string };
};
