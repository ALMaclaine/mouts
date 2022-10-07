const lerp = (ratio: number, start = 0, end = 1) => {
  return start + (end - start) * ratio;
};
export { lerp };
