import { isKind } from './is-kind';

const isNull = (val: unknown): val is null => isKind(val, 'Null');
export { isNull };
