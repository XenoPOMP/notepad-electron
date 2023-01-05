import cn from 'classnames';
import { FC } from 'react';
import TextOverflow from 'react-text-overflow';
import styles from './Note.module.scss';
import { NoteProps } from './Note.props';
import Hint from '../Hint/Hint';
import Icon from './Icon/Icon';

const Note: FC<NoteProps> = ({ data }) => {
  return (
    <div className={cn(styles.note)}>
      <div className={cn(styles.content)}>
        <div className={cn(styles.text)}>
          <h3>{data.title}</h3>

          <TextOverflow text={data.content} />
        </div>

        <div className={cn(styles.controls)}>
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Note;
