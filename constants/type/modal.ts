import { modal } from 'constants/type/initialModal';

export interface SelectProps {
  modalType?: keyof typeof modal;
  data: { index: number; label: string; value: string }[];
  onChange?: (e: { target: { value: string } }) => void;
}

export interface FilterProps {
  modalType?: keyof typeof modal;
  data: {
    title: string;
    list: {
      index: number;
      label: string;
      value: string;
      type: 'progressTypes' | 'feeTypes' | 'regionTypes';
    }[];
  }[];
  onChange?: (e: { target: { value: string } }) => void;
}
