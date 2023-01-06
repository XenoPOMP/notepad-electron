import { FC, useState } from 'react';
import cn from 'classnames';

import Hint from '@components/Hint/Hint';

import { IconProps } from './Icon.props';
import styles from './Icon.module.scss';

const Icon: FC<IconProps> = ({ hintText, img, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={cn(styles.icon)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onClick && onClick();
      }}
    >
      {img}
      <Hint
        text={hintText}
        anchors={{ horizontal: 'center', vertical: 'under' }}
        trigger={isHover}
        variant={'dark'}
      />
    </div>
  );
};

export default Icon;
