import { Spread } from '@mouts/types';

const mixIn = <A extends object[]>(...a: [...A]) =>
  Object.assign(a[0], ...a.slice(1)) as Spread<A>;

export { mixIn };
