import { isArray, isObject, isPlainObject } from 'is-ts';
import { clone } from './clone';
import { forOwn } from '../object/for-own';

const _cloneDeep = (val: unknown, instanceClone: unknown): unknown => {
  if (isObject(val)) {
    return cloneObject(val, instanceClone);
  } else if (isArray(val)) {
    return cloneArray(val, instanceClone);
  } else {
    return clone(val);
  }
};

const cloneObject = (source: unknown, instanceClone: unknown): unknown => {
  if (isPlainObject(source)) {
    const out = {};
    forOwn(
      source,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (this: any, val, key) {
        this[key] = _cloneDeep(val, instanceClone);
      },
      out
    );
    return out;
  } else if (typeof instanceClone === 'function') {
    return instanceClone(source);
  } else {
    return source;
  }
};

const cloneArray = (arr: unknown[], instanceClone: unknown): unknown => {
  const out = [];
  let i = -1;
  const n = arr.length;
  while (++i < n) {
    out.push(_cloneDeep(arr[i], instanceClone));
  }
  return out;
};

const cloneDeep = <T>(
  val: T,
  useStructured = true,
  instanceClone?: CallableFunction
): T => {
  if (globalThis.structuredClone && useStructured) {
    return globalThis.structuredClone(val) as T;
  } else {
    return _cloneDeep(val, instanceClone) as T;
  }
};
export { cloneDeep };
