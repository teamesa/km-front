export interface SelectProps {
  /** 선택창에 표시될 제목 */
  label?: string;
  /** input-name */
  name: string;
  /** option */
  data?: { label: string | number; value: string }[];
  /** input-value */
  value?: string;
  /** value가 없을 경우 대체 값 */
  placeholder?: string;
  /** v 값을 넣으면 변경됨 */
  onChange?: (e: { target: { value: string; name: string } }) => void;
  /** defaultValue */
  defaultValue?: string;
}
