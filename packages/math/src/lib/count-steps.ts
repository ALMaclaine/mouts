import { unifyZero } from '@mouts/core';

const countSteps = (
  val: number,
  step: number,
  overflow = Number.MAX_SAFE_INTEGER
) => {
  return unifyZero(Math.floor(val / step) % overflow);
};
export { countSteps };
