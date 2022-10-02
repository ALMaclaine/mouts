import { isNumber } from './is-number';

const isFloat = (val: unknown): val is number => isNumber(val) && val % 1 === 0;
export { isFloat };
