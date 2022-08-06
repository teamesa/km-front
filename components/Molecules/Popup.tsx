import { Shadow, Box } from 'components/Atoms';

export type PopupProps = {
  children?: JSX.Element;
  type?: 'bottom';
};

const Popup = ({ type, children }: PopupProps) => {
  return (
    <Shadow type={type}>
      <Box width={type == 'bottom' ? '100%' : undefined} zIndex={3}>
        {children}
      </Box>
    </Shadow>
  );
};

export default Popup;
