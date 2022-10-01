import { isKind } from './is-kind';

const isUndefined = (val: unknown): val is undefined =>
  isKind(val, 'Undefined');
export { isUndefined };
