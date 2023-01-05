import { Lang } from '../types/types';

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
      },
    },
    ru: {},
  };

  return locales[lang];
};

export default useLocalization;
