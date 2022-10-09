import { unifyZero } from '@mouts/core';

const parseFloat = (str: string): number => unifyZero(Number.parseFloat(str));
export { parseFloat };
