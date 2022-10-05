const filterArray = <T>(
  arr: T[],
  cb: (val: T, i: number, inArr: T[]) => boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any
) => arr.filter(cb, thisArg);
export { filterArray };
