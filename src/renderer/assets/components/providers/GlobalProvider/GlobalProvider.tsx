import { FC } from 'react';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import { GlobalProviderProps } from './GlobalProvider.props';

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default GlobalProvider;
