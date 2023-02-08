import { Sized } from '@mouts/types';

const sameSize = (val1: Sized, val2: Sized): boolean => {
  return val1.length === val2.length;
};
export { sameSize };
