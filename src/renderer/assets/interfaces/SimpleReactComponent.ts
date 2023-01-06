import { Key, ReactNode } from 'react';

export interface SimpleReactComponent {
  children?: ReactNode;
  className?: string;
  key?: Key;
}
