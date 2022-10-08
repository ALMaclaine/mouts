import { Sized } from '@mouts/types';

const sameSize = <T extends Sized>(val1: T, val2: T): boolean => {
  return val1.length === val2.length;
};
export { sameSize };
