import { isKind } from 'mouts';

const isBoolean = (val: unknown): val is boolean => {
  return isKind(val, 'Boolean');
};
export { isBoolean };
