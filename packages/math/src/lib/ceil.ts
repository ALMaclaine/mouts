import { unifyZero } from '@mouts/core';

const ceil = (val: number, step = 1) => {
  const absStep = Math.abs(step);
  return unifyZero(Math.ceil(val / absStep) * absStep);
};
export { ceil };
