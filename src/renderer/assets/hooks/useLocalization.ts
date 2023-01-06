import { Lang } from '@utils/types';
import en from '@locales/en';
import ru from '@locales/ru';

const useLocalization = () => {
  const lang: Lang = 'en';

  const locales = {
    en,
    ru,
  };

  return locales[lang];
};

export default useLocalization;
