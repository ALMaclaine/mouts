const countSteps = (
  val: number,
  step: number,
  overflow = Number.MAX_SAFE_INTEGER
) => {
  return Math.floor(val / step) % overflow;
};
export { countSteps };
