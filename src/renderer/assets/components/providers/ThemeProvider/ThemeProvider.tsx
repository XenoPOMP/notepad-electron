import { FC } from 'react';
import cn from 'classnames';
import { ThemeProviderProps } from './ThemeProvider.props';
import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <div className={cn(styles.themes, styles.dark)}>{children}</div>;
};

export default ThemeProvider;
