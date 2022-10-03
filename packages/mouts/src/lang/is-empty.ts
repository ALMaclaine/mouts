import { forOwn } from '../object/for-own';
import { isNull, isUndefined, isArray, isString, isObject } from 'is-ts';

const isEmpty = (val: unknown): boolean => {
  // typeof null == 'object' so we check it first
  if (isNull(val) || isUndefined(val)) {
    return true;
  } else if (isString(val) || isArray(val)) {
    return !val.length;
  } else if (isObject(val)) {
    let result = true;
    forOwn(val, function () {
      result = false;
      return false; // break loop
    });
    return result;
  } else {
    return true;
  }
};
export { isEmpty };
