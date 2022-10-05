const everyArray = <T>(
  arr: T[],
  cb: (val: T, i: number, inArr: T[]) => boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any
) => arr.every(cb, thisArg);
export { everyArray };
