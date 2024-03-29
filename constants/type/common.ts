export interface HeaderBarProps {
  /** header 왼쪽 버튼의 타입을 설정합니다. (기본 : 왼쪽 화살표 버튼) */
  headerLeft:
    | 'default'
    | 'logo'
    | 'disabled'
    | 'privacy'
    | 'service'
    | 'allShow'
    | 'introduce';
  /** header 오른쪽 부분을 설정합니다. (기본 : 찾기) */
  headerRight?: 'disabled' | 'search' | 'close';
  /** header 끝 부분을 설정합니다. (기본 : 없음) */
  headerEnd?: 'disabled' | 'home';
  /** header 왼쪽 버튼의 액션을 설정합니다.(기본 : 없음) */
  title?: string;
  headerLeftAction?: () => void;
  /** header 오른쪽 버튼의 액션을 설정합니다. (기본 : 서치 페이지로 이동)*/
  headerRightAction?: () => void;
  frontTopTransparent?: boolean;
  transparent?: boolean;
  isSearchType?: boolean;
}
