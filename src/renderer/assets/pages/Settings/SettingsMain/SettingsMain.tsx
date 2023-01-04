import Layout from '../../../components/Layout/Layout';
import useLocalization from '../../../hooks/useLocalization';

const SettingsMain = () => {
  const localization = useLocalization();

  return <Layout frame={{ title: localization.pages.settings.title }}></Layout>;
};

export default SettingsMain;
