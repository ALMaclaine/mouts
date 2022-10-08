import { NULL } from '@mouts/constants';

const isNull = (val: unknown): val is null => val === NULL;
export { isNull };
