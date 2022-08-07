import { modal } from 'constants/type/initialModal';

export interface SelectProps {
  modalType?: keyof typeof modal;
  data: { index: number; label: string; value: string }[];
  onChange?: (e: { target: { value: string } }) => void;
}
