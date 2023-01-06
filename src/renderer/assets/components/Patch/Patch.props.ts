import { PatchType } from '@utils/types';
import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface PatchProps extends SimpleReactComponent {
  text: PatchType;
  delayIndex?: number;
}
