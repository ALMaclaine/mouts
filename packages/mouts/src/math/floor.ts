const floor = (val: number, step = 1) => {
  const absStep = Math.abs(step);
  return Math.floor(val / absStep) * absStep;
};
export { floor };
