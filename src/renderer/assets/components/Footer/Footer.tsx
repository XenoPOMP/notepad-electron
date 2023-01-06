import cn from 'classnames';
import SettingsButton from '@components/Footer/SettingsButton/SettingsButton';
import PatchNotesButton from '@components/Footer/PatchNotesButton/PatchNotesButton';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(styles.appFooter)}>
      <SettingsButton />

      <PatchNotesButton />
    </footer>
  );
};

export default Footer;
