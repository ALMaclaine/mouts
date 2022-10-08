import { isKind } from './is-kind';
import { Printable } from '@mouts/types';

const isPrintable = (val: unknown): val is Printable =>
  !isKind(val?.toString, 'Undefined');
export { isPrintable };
