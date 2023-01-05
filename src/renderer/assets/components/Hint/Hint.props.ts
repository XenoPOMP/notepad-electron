export interface HintProps {
  text: string;
  anchors: {
    horizontal: 'left' | 'center' | 'right',
    vertical: 'above' | 'center' | 'under',
  };
  trigger: boolean;
}
