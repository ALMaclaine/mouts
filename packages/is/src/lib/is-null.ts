import { NULL } from '../constants';

const isNull = (val: unknown): val is null => val === NULL;
export { isNull };
