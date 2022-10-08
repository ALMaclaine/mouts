import { isFalsy, isNull, isUndefined } from '@mouts/is';

const compact = <T>(arr: T[] = [], filterFalsy = false) => {
  return arr.filter((val) => {
    if (filterFalsy && isFalsy(val)) {
      return false;
    }

    return !(isNull(val) || isUndefined(val));
  });
};
export { compact };
