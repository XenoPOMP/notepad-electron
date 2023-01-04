import cn from 'classnames';
import { FC } from 'react';
import GlobalProvider from '../providers/GlobalProvider/GlobalProvider';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import { LayoutProps } from './Layout.props';
import Footer from '../Footer/Footer';

const Layout: FC<LayoutProps> = ({ children, frame }) => {
  return (
    <GlobalProvider>
      <div className={cn(styles.layout)}>
        <Header frame={frame} />

        <main>{children}</main>

        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default Layout;
