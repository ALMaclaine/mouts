import { ArrayCallback } from '@mouts/types';

const filterArray = <T>(
  arr: T[],
  cb: ArrayCallback<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any
) => arr.filter(cb, thisArg);
export { filterArray };
