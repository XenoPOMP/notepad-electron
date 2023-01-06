import { ReactNode } from 'react';

export interface PatchProps {
  text: {
    versionId: string,
    textBlocks: ReactNode[],
  };
}
