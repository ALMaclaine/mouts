import { ComparatorBoolean } from '@mouts/types';

const equalsNumber: ComparatorBoolean<number> = (
  num1: number,
  num2: number
): boolean => num1 === num2;
export { equalsNumber };
