import { mixIn } from '@mouts/core';

const createObject = <T, R>(parent: T, props?: R): T & R => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function F() {}
  F.prototype = parent;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return mixIn(new F(), props);
};
export { createObject };
