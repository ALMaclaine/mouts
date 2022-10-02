import { isKind } from 'mouts';

const isDate = (val: unknown): val is Date => {
  return isKind(val, 'Date');
};
export { isDate };
