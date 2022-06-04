import Filter from 'components/Organisms/Modal/Filter';
import Select from 'components/Organisms/Modal/Select';

export const ModalComponents = (payload?: any) => ({
  Select: <Select payload={payload} />,
  Filter: <Filter payload={payload} />,
});

export const modal = ModalComponents();

export interface ModalProps {
  type: keyof typeof modal;
  /** 전달할 값 */
  payload?: any;
  isOff?: boolean;
}
