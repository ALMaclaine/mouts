import { ArrayCallback } from '../types/array-callback';

const everyArray = <T>(
  arr: T[],
  cb: ArrayCallback<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any
) => arr.every(cb, thisArg);
export { everyArray };
