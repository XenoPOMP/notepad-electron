import cn from 'classnames';
import { FC } from 'react';
import { PatchProps } from '@components/Patch/Patch.props';
import useLocalization from '@hooks/useLocalization';
import styles from './Patch.module.scss';

const Patch: FC<PatchProps> = ({ text }) => {
  const localization = useLocalization();

  return (
    <div className={cn(styles.patch)}>
      <div className={cn(styles.content)}>
        <h3>
          {localization.pages.patchNotes.patch.versionLabel} {text.versionId}
        </h3>

        {text.textBlocks}
      </div>
    </div>
  );
};

export default Patch;
