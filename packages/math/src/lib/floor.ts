import { unifyZero } from '@mouts/core';

const floor = (val: number, step = 1) => {
  const absStep = Math.abs(step);
  return unifyZero(Math.floor(val / absStep) * absStep);
};
export { floor };
