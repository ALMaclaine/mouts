const sign = (num: number) => {
  if (num === 0) return num; // +0 and +0 === 0
  if (isNaN(num)) return num; // NaN
  return num < 0 ? -1 : 1;
};
export { sign };
w;
