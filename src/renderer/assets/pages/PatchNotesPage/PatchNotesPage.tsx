import useLocalization from '@hooks/useLocalization';
import Layout from '@components/Layout/Layout';
import Patch from '@components/Patch/Patch';

const PatchNotesPage = () => {
  const localization = useLocalization();

  return (
    <Layout frame={{ title: localization.pages.patchNotes.title }}>
      <Patch
        text={{
          versionId: 'beta 0.1',
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
        }}
      />
    </Layout>
  );
};

export default PatchNotesPage;
