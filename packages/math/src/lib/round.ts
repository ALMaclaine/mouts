import { unifyZero } from '@mouts/core';

const round = (val: number, step = 1) => {
  return unifyZero(Math.round(val / step) * step);
};
export { round };
