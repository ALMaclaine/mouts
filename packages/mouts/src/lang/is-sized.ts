import { Sized } from '../types/sized';
import { isObject } from './is-object';
import { isArray } from './is-array';

const isSized = (val: unknown): val is Sized =>
  isArray(val) || (isObject(val) && 'length' in val);
export { isSized };
