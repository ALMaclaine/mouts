import { Sized } from '../types/sized';
import { isObject } from './is-object';
import { isArray } from './is-array';

const isSized = <T extends Sized>(val: unknown): val is T =>
  isArray(val) || (isObject(val) && 'length' in val);
export { isSized };
