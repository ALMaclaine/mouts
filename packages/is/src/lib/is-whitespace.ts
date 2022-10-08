import { WHITE_SPACES_SET } from '../constants';
import { isString, Whitespace } from 'is-ts';

const isWhitespace = (val: unknown): val is Whitespace =>
  isString(val) && WHITE_SPACES_SET.has(val);

export { isWhitespace };
