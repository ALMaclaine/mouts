const ceil = (val: number, step = 1) => {
  const absStep = Math.abs(step);
  return Math.ceil(val / absStep) * absStep;
};
export { ceil };
