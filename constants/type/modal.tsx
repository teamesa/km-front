import Select from 'components/Molecules/modals/Select';

export const ModalComponents = (payload?: any) => ({
  Select: <Select payload={payload} />,
});

const modal = ModalComponents();
export interface ModalProps {
  /** modal */
  type: keyof typeof modal;
  /** 전달할 값 */
  payload?: any;
  /** 애니메이션 type (기본 slideUp) */
  animationType?: 'fadeIn';
  /** 종료 여부  */
  isOff?: boolean;
}
