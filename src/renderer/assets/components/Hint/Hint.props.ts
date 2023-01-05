export interface HintProps {
  text: string;
  anchors: {
    horizontal: 'left' | 'center' | 'right',
    vertical: 'above' | 'center' | 'under',
  };
  horizontalCenterMargin?: {
    left?: string;
    right?: string;
  }
  trigger: boolean;
}
