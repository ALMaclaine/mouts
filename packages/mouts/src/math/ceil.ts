import { unifyZero } from './unify-zero';

const ceil = (val: number, step = 1) => {
  const absStep = Math.abs(step);
  return unifyZero(Math.ceil(val / absStep) * absStep);
};
export { ceil };
