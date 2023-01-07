import cn from 'classnames';
import { FC } from 'react';
import TextOverflow from 'react-text-overflow';

import Icon from '@components/Note/Icon/Icon';
import useLocalization from '@hooks/useLocalization';

import styles from './Note.module.scss';
import { NoteProps } from './Note.props';

const Note: FC<NoteProps> = ({ data }) => {
  const localization = useLocalization();

  return (
    <div className={cn(styles.note)}>
      <div className={cn(styles.content)}>
        <div className={cn(styles.text)}>
          <h3>{data.title}</h3>

          <TextOverflow text={data.content} />
        </div>

        <div className={cn(styles.controls)}>
          <Icon
            img={
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className={cn(styles.withStroke)}
                  d='M17.7798 6.11572L4.24805 19.6777L3.125 21.875L5.32178 20.7519L18.8843 7.22021L17.7798 6.11572ZM20.5415 3.354L19.437 4.45849L20.5415 5.56347L21.646 4.45849C21.7924 4.31199 21.8746 4.11336 21.8746 3.90625C21.8746 3.69913 21.7924 3.5005 21.646 3.354V3.354C21.4995 3.2076 21.3009 3.12536 21.0938 3.12536C20.8866 3.12536 20.688 3.2076 20.5415 3.354V3.354Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            hintText={localization.pages.main.note.hints.edit}
          />

          <Icon
            img={
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={cn(styles.trash)}
              >
                <path
                  d='M5.46875 5.46875L6.44531 21.0938C6.4917 21.9966 7.14844 22.6562 8.00781 22.6562H16.9922C17.855 22.6562 18.4995 21.9966 18.5547 21.0938L19.5312 5.46875'
                  className={cn(styles.withStroke)}
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className={cn(styles.withFill)}
                  d='M3.90625 5.46875H21.0938Z'
                />
                <path
                  d='M3.90625 5.46875H21.0938'
                  className={cn(styles.withStroke)}
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                />
                <path
                  d='M9.375 5.46875V3.51562C9.37455 3.3616 9.40455 3.20901 9.46328 3.06663C9.52202 2.92425 9.60832 2.79488 9.71723 2.68598C9.82614 2.57707 9.9555 2.49076 10.0979 2.43203C10.2403 2.3733 10.3929 2.3433 10.5469 2.34375H14.4531C14.6071 2.3433 14.7597 2.3733 14.9021 2.43203C15.0445 2.49076 15.1739 2.57707 15.2828 2.68598C15.3917 2.79488 15.478 2.92425 15.5367 3.06663C15.5954 3.20901 15.6255 3.3616 15.625 3.51562V5.46875M12.5 8.59375V19.5312M8.98438 8.59375L9.375 19.5312M16.0156 8.59375L15.625 19.5312'
                  className={cn(styles.withStroke)}
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            hintText={localization.pages.main.note.hints.delete}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
