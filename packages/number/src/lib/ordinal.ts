import { nth } from './nth';

const ordinal = (num: number) => `${num}${nth(num)}`;
export { ordinal };
