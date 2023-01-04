const useLocalization = () => {
  type LangType = 'en' | 'ru';
  const lang: LangType = 'en';

  const locales = {
    en: {
      pages: {
        main: {
          title: 'Main',
        },
        settings: {
          title: 'Settings',
        },
      },
    },
    ru: {},
  };

  return locales[lang];
};

export default useLocalization;
