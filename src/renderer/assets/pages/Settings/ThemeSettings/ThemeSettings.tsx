import useLocalization from '../../../hooks/useLocalization';
import Layout from '../../../components/Layout/Layout';

const ThemeSettings = () => {
  const localization = useLocalization();

  return (
    <Layout frame={{ title: localization.pages.themeSettings.title }}></Layout>
  );
};

export default ThemeSettings;
