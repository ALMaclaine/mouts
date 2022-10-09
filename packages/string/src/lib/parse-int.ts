import { unifyZero } from '@mouts/core';

const parseInt = (str: string, radix?: number): number =>
  unifyZero(Number.parseInt(str, radix));
export { parseInt };
