import { sameSize } from './same-size';

const defaultComparator = <T>(val1: T, val2: T) => val1 === val2;
const equalsArray = <T>(
  arr1: T[],
  arr2: T[],
  comparator: (val1: T, val2: T) => boolean = defaultComparator
) => {
  if (!sameSize(arr1, arr2)) {
    return false;
  }

  return arr1.every((val, index) => comparator(val, arr2[index]));
};
export { equalsArray };
