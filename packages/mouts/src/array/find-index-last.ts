import { ArrayCallback } from '../types/array-callback';

const findLastIndex = <T>(arr: T[], cb: ArrayCallback<T>): number => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
export { findLastIndex };
