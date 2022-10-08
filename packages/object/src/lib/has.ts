import { get } from './get';
import { UNDEFINED } from '@mouts/constants';

const has = (obj: Record<string, unknown>, prop: string) =>
  get(obj, prop) !== UNDEFINED;
export { has };
