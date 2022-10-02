import { isSized } from './is-sized';
import { isString } from './is-string';
import { isFunction } from './is-function';
import { isRegex } from './is-regex';
import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

const toArray = <T>(val?: unknown): T[] => {
  const ret: T[] = [];
  if (isNull(val) || isUndefined(val)) {
    return ret;
  }

  if (val === '') {
    return ['' as T];
  }

  const sized = isSized(val);
  if (!sized || isString(val) || isFunction(val) || isRegex(val)) {
    ret.push(val as T);
  }

  if (sized) {
    const { length } = val;
    for (let i = 0; i < length; i++) {
      ret.push(val[i] as T);
    }
  }

  return ret;
};

export { toArray };
