import { Lang } from '../utils/types';

const useLocalization = () => {
  const lang: Lang = 'en';

  const locales = {
    en: {
      pages: {
        main: {
          title: 'Main',
        },
        mainSettings: {
          title: 'Settings',
          sections: {
            language: {
              title: 'Language',
              rusLocale: 'Russian',
              enLocale: 'English',
            },
            theme: {
              title: 'Theme',
            },
          },
        },
        themeSettings: {
          title: 'Settings • Theme',
        },
      },
    },
    ru: {},
  };

  return locales[lang];
};

export default useLocalization;
