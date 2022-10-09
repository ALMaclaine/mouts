import { unifyZero } from '@mouts/core';

const lerp = (ratio: number, start = 0, end = 1) => {
  return unifyZero(start + (end - start) * ratio);
};
export { lerp };
