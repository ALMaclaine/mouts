import { isSized } from './is-sized';
import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

const toArray = <T>(val: unknown): T[] => {
  const ret: T[] = [];
  if (isNull(val) || isUndefined(val)) {
    return ret;
  }

  if (val === '') {
    return ['' as T];
  }

  const sized = isSized(val);
  if (sized) {
    const { length } = val;
    for (let i = 0; i < length; i++) {
      ret.push(val[i] as T);
    }
  } else {
    ret.push(val as T);
  }

  return ret;
};

export { toArray };
