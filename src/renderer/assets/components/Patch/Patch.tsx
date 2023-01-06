import cn from 'classnames';
import { FC } from 'react';
import { PatchProps } from '@components/Patch/Patch.props';
import useLocalization from '@hooks/useLocalization';
import { motion } from 'framer-motion';
import styles from './Patch.module.scss';

const Patch: FC<PatchProps> = ({ text, key, delayIndex }) => {
  const localization = useLocalization();

  return (
    <div className={cn(styles.patch)} key={key}>
      <motion.div
        initial={{ opacity: 0, x: '25%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: (delayIndex !== undefined ? delayIndex : 0) * 0.25,
          ease: 'easeOut',
        }}
        className={cn(styles.content)}
      >
        <h3>
          {localization.pages.patchNotes.patch.versionLabel} {text.versionId}
        </h3>

        {text.textBlocks}
      </motion.div>
    </div>
  );
};

export default Patch;
