import { isUndefined } from '@mouts/is';
import { Predicate } from '@mouts/types';

const ltrim = (val: string, predicate?: Predicate<string>) => {
  const { length } = val;
  if (length === 0) return '';
  if (isUndefined(predicate)) {
    return val.trimLeft();
  }
  let i = 0;
  while (i++ < length) {
    if (!predicate(val[i])) break;
  }

  return val.slice(i);
};
export { ltrim };
