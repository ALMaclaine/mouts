// unlike clamp, loop brings values around the other ends extreme value
const loop = (val: number, min: number, max: number) => {
  const or = val > max ? min : val;
  return val < min ? max : or;
};
export { loop };
