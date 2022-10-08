import { UNDEFINED } from '../constants';

const isUndefined = (val: unknown): val is undefined => val === UNDEFINED;
export { isUndefined };
