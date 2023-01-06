import { CSSProperties, FC, useEffect } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import { HintProps } from './Hint.props';
import styles from './Hint.module.scss';

const Hint: FC<HintProps> = ({
  text,
  anchors,
  trigger,
}) => {
  const getAnchoredClasses = (): string => {
    let classes = '';

    switch (anchors.vertical) {
      case 'above': {
        classes = cn(classes, styles.vAbove);
        break;
      }

      case 'center': {
        classes = cn(classes, styles.vCenter);
        break;
      }

      case 'under': {
        classes = cn(classes, styles.vUnder);
        break;
      }

      default: {
        classes = cn(classes);
      }
    }

    switch (anchors.horizontal) {
      case 'left': {
        classes = cn(classes, styles.hLeft);
        break;
      }

      case 'center': {
        classes = cn(classes, styles.hCenter);
        break;
      }

      case 'right': {
        classes = cn(classes, styles.hRight);
        break;
      }

      default: {
        classes = cn(classes);
      }
    }

    return classes;
  };

  const getSX = () : CSSProperties => {
    const sx = {} as CSSProperties;

    return sx;
  };

  useEffect(() => {
    console.log('Change triggered');
  }, [trigger]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: trigger ? 1 : 0 }}
      transition={{ duration: 0.15 }}
      style={getSX()}
      className={cn(styles.hint, cn(getAnchoredClasses()))}
    >
      <div className={cn(styles.content)}>
        {text}

        <div className={cn(styles.iconPlaceholder)}>
          <div className={cn(styles.icon)}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hint;
