import { ArrayCallback } from '../types/array-callback';
import { findIndexLast } from './find-index-last';

const findLast = <T>(
  arr: T[],
  cb: ArrayCallback<T>,
  defaultVal?: T
): T | undefined => {
  const lastIndex = findIndexLast(arr, cb);
  return arr[lastIndex] || defaultVal || undefined;
};
export { findLast };
