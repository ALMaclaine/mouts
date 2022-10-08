import { Printable } from '../types/printable';
import { isKind } from './is-kind';

const isPrintable = (val: unknown): val is Printable =>
  !isKind(val?.toString, 'Undefined');
export { isPrintable };
