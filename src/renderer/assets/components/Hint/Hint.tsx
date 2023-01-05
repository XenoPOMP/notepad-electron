import { CSSProperties, FC, useEffect } from 'react';
import cn from 'classnames';
import { HintProps } from './Hint.props';
import styles from './Hint.module.scss';
import { motion } from 'framer-motion';

const Hint: FC<HintProps> = ({
  text,
  anchors,
  trigger,
  horizontalCenterMargin,
}) => {
  const getAnchoredClasses = (): string => {
    let classes: string = '';

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
    }

    switch (anchors.horizontal) {
      case 'left': {
        classes = cn(classes, styles.hLeft);
        break;
      }

      case 'right': {
        classes = cn(classes, styles.hRight);
        break;
      }
    }

    return classes;
  };

  const getSX = () : CSSProperties => {
    const sx = {} as CSSProperties;

    sx.left = horizontalCenterMargin?.left;
    sx.right = horizontalCenterMargin?.right;

    return sx;
  };

  useEffect(() => {
    console.log('Change triggered');
  }, [trigger]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: trigger ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
      style={getSX()}
      className={cn(styles.hint, cn(getAnchoredClasses()))}
    >
      {text}
    </motion.div>
  );
};

export default Hint;
