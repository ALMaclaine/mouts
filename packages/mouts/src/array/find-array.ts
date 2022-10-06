import { ArrayCallback } from '../types/array-callback';

const findArray = <T>(
  arr: T[],
  cb: ArrayCallback<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any
) => arr.find(cb, thisArg);
export { findArray };
