export interface HeaderBarProps {
  /** header 왼쪽 버튼의 타입을 설정합니다. (기본 : 왼쪽 화살표 버튼) */
  headerLeft?: 'disabled' | 'logo';
  /** header 오른쪽 부분을 설정합니다. (기본 : 찾기) */
  headerRight?: 'disabled' | 'search';
  /** header 끝 부분을 설정합니다. (기본 : 없음) */
  headerEnd?: 'disabled' | 'home';
  /** header 왼쪽 버튼의 액션을 설정합니다.(기본 : 뒤로가기) */
  headerLeftAction?: () => void;
  /** header 오른쪽 버튼의 액션을 설정합니다. (기본 : 없음)*/
  headerRightAction?: () => void;
  /** header 끝 버튼의 액션을 설정합니다. (기본 : 없음)*/
  headerEndAction?: () => void;
}
