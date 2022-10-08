import { isArray, isNull, isObject, isString, isUndefined } from '@mouts/is';

const isEmpty = (val: unknown): boolean => {
  // typeof null == 'object' so we check it first
  if (isNull(val) || isUndefined(val)) {
    return true;
  } else if (isString(val) || isArray(val)) {
    return !val.length;
  } else if (isObject(val)) {
    return Object.keys(val).length === 0;
  } else {
    return true;
  }
};
export { isEmpty };
