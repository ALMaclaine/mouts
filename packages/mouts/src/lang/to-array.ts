import { isNull, isSized, isUndefined } from 'is-ts';

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
