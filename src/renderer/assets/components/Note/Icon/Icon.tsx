import { FC, useState } from 'react';
import cn from 'classnames';
import Hint from '../../Hint/Hint';
import useLocalization from '../../../hooks/useLocalization';
import { IconProps } from './Icon.props';
import styles from './Icon.module.scss';

const Icon: FC<IconProps> = ({ hintText, img }) => {
  const [isHover, setIsHover] = useState(false);
  const localization = useLocalization();

  return (
    <div
      className={cn(styles.icon)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {img}
      <Hint
        text={hintText}
        anchors={{ horizontal: 'center', vertical: 'under' }}
        trigger={isHover}
      />
    </div>
  );
};

export default Icon;
