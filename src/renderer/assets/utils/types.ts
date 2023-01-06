import { ReactNode } from 'react';

type Lang = 'en' | 'ru';
type PatchType = {
  versionId: string,
  textBlocks: ReactNode[],
};

export { Lang, PatchType };
