import { MAX_INT32 } from '../constants';

const toUInt31 = (val: number) => {
  // we do not use lang/toNumber because of perf and also because it
  // doesn't break the functionality
  return val <= 0 ? 0 : val > MAX_INT32 ? ~~(val % (MAX_INT32 + 1)) : ~~val;
};
export { toUInt31 };
