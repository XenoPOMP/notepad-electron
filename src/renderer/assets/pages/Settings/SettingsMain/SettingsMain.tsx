import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import useLocalization from '@hooks/useLocalization';

import styles from './SettingsMain.module.scss';

const SettingsMain = () => {
  const localization = useLocalization();

  const dispatch = useDispatch();
  const themeLink = '/settings/theme';
  const navigate = useNavigate();

  return (
    <Layout frame={{ title: localization.pages.mainSettings.title }}>
      <div className={cn(styles.content)}>
        <section key='lang-section'>
          <h2>{localization.pages.mainSettings.sections.language.title}</h2>
          <span className={cn(styles.lang, styles.nonActive)}>
            {localization.pages.mainSettings.sections.language.rusLocale}
          </span>
          {' • '}
          <span className={cn(styles.lang, styles.active)}>
            {localization.pages.mainSettings.sections.language.enLocale}
          </span>
        </section>

        <section key='theme-section'>
          <h2
            className={cn(styles.hasLink)}
            onClick={() => {
              dispatch({
                type: 'CHANGE_PAGE',
                payload: {
                  nextPage: themeLink,
                },
              });
              navigate(themeLink, { replace: true });
            }}
          >
            {localization.pages.mainSettings.sections.theme.title}{' '}
            <svg
              width='8'
              height='13'
              viewBox='0 0 8 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                y='6.10568'
                width='8.31555'
                height='1.91887'
                rx='0.959433'
                transform='rotate(-45 0 6.10568)'
              />
              <rect
                x='1.35693'
                y='4.98889'
                width='8.31555'
                height='1.91887'
                rx='0.959433'
                transform='rotate(45 1.35693 4.98889)'
              />
            </svg>
          </h2>
        </section>
      </div>
    </Layout>
  );
};

export default SettingsMain;
