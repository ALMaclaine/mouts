import { is } from './is';

const isnt = (x: unknown, y: unknown) => !is(x, y);
export { isnt };
