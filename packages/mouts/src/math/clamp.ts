const clamp = (val: number, min = 0, max = 1) => {
  const or = val > max ? max : val;
  return val < min ? min : or;
};
export { clamp };
