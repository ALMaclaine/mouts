import { isNumber } from './is-number';
import { isInfinite } from 'mouts';

const isFloat = (val: unknown): val is number =>
  isInfinite(val) && isNumber(val) && val % 1 !== 0;
export { isFloat };
