import Layout from '../../components/Layout/Layout';
import useLocalization from '../../hooks/useLocalization';

const MainPage = () => {
  const localization = useLocalization();

  return (
    <Layout
      frame={{
        title: localization.pages.main.title,
      }}
    ></Layout>
  );
};

export default MainPage;
