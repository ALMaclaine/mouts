import { isKind } from './is-kind';

const isFunction = (val: unknown): val is CallableFunction =>
  isKind(val, 'Function');
export { isFunction };
