import { UNDEFINED } from '@mouts/constants';
import { get } from '@mouts/core';

const has = (obj: Record<string, unknown>, prop: string) =>
  get(obj, prop) !== UNDEFINED;
export { has };
