import cn from 'classnames';
import { FC } from 'react';

import Header from '@components/Header/Header';
import GlobalProvider from '@components/providers/GlobalProvider/GlobalProvider';
import Footer from '@components/Footer/Footer';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

const Layout: FC<LayoutProps> = ({ children, frame, className }) => {
  return (
    <GlobalProvider>
      <div className={cn(styles.layout, className)}>
        <Header frame={frame} />

        <main>{children}</main>

        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default Layout;
