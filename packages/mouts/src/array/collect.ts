import { append } from './append';

// collect is like map except callback can return array of T
const collect = <T>(
  arr: T[],
  callback: (val: T, i?: number, inArr?: T[]) => T | T[]
) => {
  const results: T[] = [];
  const end = arr.length;
  for (let i = 0; i < end; i++) {
    const value = callback(arr[i], i, arr);
    append(results, value);
  }
  return results;
};
export { collect };
