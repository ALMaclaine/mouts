const everyArray = <T>(
  arr: T[],
  cb: (val: T, i: number, inArr: T[]) => boolean
) => arr.every(cb);
export { everyArray };