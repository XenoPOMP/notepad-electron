import Layout from '@components/Layout/Layout';
import useLocalization from '@hooks/useLocalization';

const ThemeSettings = () => {
  const localization = useLocalization();

  return (
    <Layout frame={{ title: localization.pages.themeSettings.title }}></Layout>
  );
};

export default ThemeSettings;
