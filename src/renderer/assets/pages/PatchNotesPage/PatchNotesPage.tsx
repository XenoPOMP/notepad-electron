import useLocalization from '@hooks/useLocalization';
import Layout from '@components/Layout/Layout';
import Patch from '@components/Patch/Patch';
import { PatchType } from '@utils/types';
import { useState } from 'react';
import cn from 'classnames';
import styles from './PatchNotesPage.module.scss';

const PatchNotesPage = () => {
  const MAX_PATCHES_COUNT = 6;
  const localization = useLocalization();

  const patches: PatchType[] = [
    {
      versionId: '0.1',
      textBlocks: [
        <p>
          {localization.pages.patchNotes.patch.patchZeroDotOne.paragraphOne}
        </p>,
        <ul>
          {localization.pages.patchNotes.patch.patchZeroDotOne.dottedListOne.map(
            (e) => (
              <li>{e}</li>
            ),
          )}
        </ul>,
      ],
    },

    {
      versionId: '0.2',
      textBlocks: [
        <p>
          {localization.pages.patchNotes.patch.patchZeroDotTwo.paragraphOne}
        </p>,
        <p>
          {localization.pages.patchNotes.patch.patchZeroDotTwo.paragraphTwo}
        </p>,
      ],
    },
  ];

  const newPatches = patches.reverse().slice(0, MAX_PATCHES_COUNT);
  const earlierPatches = (): PatchType[] | undefined => {
    if (patches.length <= MAX_PATCHES_COUNT) {
      return undefined;
    }

    return patches.slice(MAX_PATCHES_COUNT, patches.length);
  };

  const [isOldPatchesDisplaying, setIsOldPatchesDisplaying] = useState(false);
  const hasEarlierPatches = earlierPatches() !== undefined;

  return (
    <Layout
      frame={{ title: localization.pages.patchNotes.title }}
      className={cn(styles.page)}
    >
      {newPatches.map((e, index) => (
        <Patch text={e} delayIndex={index} />
      ))}

      {isOldPatchesDisplaying &&
        earlierPatches()?.map((e, index) => (
          <Patch text={e} delayIndex={index} />
        ))}

      {hasEarlierPatches && !isOldPatchesDisplaying && (
        <div
          className={cn(styles.showMore)}
          onClick={() => setIsOldPatchesDisplaying(true)}
        >
          {localization.pages.patchNotes.showMoreButton}
        </div>
      )}
    </Layout>
  );
};

export default PatchNotesPage;
