import cn from 'classnames';
import useLocalization from '@hooks/useLocalization';
import appInfo from '@info/app-info';
import Hint from '@components/Hint/Hint';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './PatchNotesButton.module.scss';

const PatchNotesButton = () => {
  const dispatch = useDispatch();
  const navigateLink = '/patches';
  const navigate = useNavigate();

  const [hintTriggered, setHintTriggered] = useState(false);
  const localization = useLocalization();

  return (
    <div
      className={cn(styles.button)}
      onMouseEnter={() => setHintTriggered(true)}
      onMouseLeave={() => setHintTriggered(false)}
      onClick={() => {
        dispatch({
          type: 'CHANGE_PAGE',
          payload: {
            nextPage: navigateLink,
          },
        });
        navigate(navigateLink, { replace: true });
      }}
    >
      {localization.pages.main.footer.versionLayout}
      {appInfo.version}
      <Hint
        text={localization.pages.main.footer.hints.versionButton}
        anchors={{ horizontal: 'center', vertical: 'above' }}
        trigger={hintTriggered}
        variant={'light'}
      />
    </div>
  );
};

export default PatchNotesButton;
